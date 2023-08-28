import {  db } from '../main.js';
import {  onValue, ref, set, update, get, child  } from "firebase/database";


//Get User 
async function getUser(userid){  
    const starCountRef = ref(db, `users/${userid}`);
    let user = '';
    onValue(starCountRef, (snapshot) => {
        user = snapshot.val();
    }); 

    return user;
}

//Generates a random ID
function makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 9) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// Creates a company in the database
async function createCoupon(discount,validity,subHeading,couponProvider) {
    const couponId = makeid();
    set(ref(db, 'coupons/' + couponId), {
        discount: discount,
        validity:validity,
        subHeading:subHeading,
        couponProvider:couponProvider,
    });
}


//Get a coupon from the database
async function getCoupon(couponId){  
    return new Promise((resolve, reject) => { 
        const starCountRef = ref(db, `coupons/${couponId}`);
        let coupon = '';
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                coupon = data;
                resolve(coupon);
            }
        }); 
    },(error)=>{
        reject(error);
    })
}



// Get coupon IDs
function getAllCouponsIds(){
    return new Promise((resolve, reject) => { 
        const starCountRef = ref(db, `coupons/`);
        let couponIds = [];
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
            if(data){
                Object.entries(data).forEach((val)=>{
                    couponIds.push(val[0])
                   
                })
                resolve(couponIds);
            }
        }); 
    },(error)=>{
        reject(error);
    })

}

// Add coupons for the new user
// This function gets called when a user registers on the loyalty app.
// As soon as he registers he gets to access all the coupons published by the partner companines

function assignCouponToTheNewUser(){
    const userId = localStorage.getItem('userid');
    let coupons = {};
    // get the Coupon IDs 
    getAllCouponsIds().then((val)=>{
        // Create coupon object for the user object
        val.forEach((couponId)=>{
            coupons[couponId] = {status:'ACTIVE'}
        });
        // update the coupon ids with status in the DB
        update(ref(db,`users/${userId}`),{coupons})
        .then(()=>{
            console.log('coupons added')
        }).catch((error)=>{
            console.error(error);
        })
    }).catch((error)=>{
        console.error(error);
    })

}


// Get coupons for the user
async function getAllCouponsForUser(){
    const userId = localStorage.getItem('userid');

   return get(child(ref(db),`coupons`)).then((coupons)=>{

        let activeCoupons = [];
        let usedCoupons = [];
    // Get the coupon data from the user to check what coupons are active or used 
        onValue(ref(db, `users/${userId}/coupons`), (snapshot) => {
            Object.entries(snapshot.val()).map((val)=>{
            if(val[1].status ==='ACTIVE'){
                const id = val[0];
                activeCoupons.push([id,coupons.val()[id]]);
                return;
            }else if(val[1].status ==='USED'){ 
                const id = val[0];  
                usedCoupons.push([id,coupons.val()[id]]); 
                return;
            }
            })
        }); 

        return {
            activeCoupons,
            usedCoupons 
        }

    }).catch((error) => console.error(error));

}



// Reedeem coupon
// The redeem coupon function simply changes the status of the coupon from 'ACTIVE' to 'USED' based on the user activity.
async function reedeemCoupon(couponId){
    const userId = localStorage.getItem('userid');
    
    update(ref(db,`users/${userId}/coupons/${couponId}`),{status:'USED'}).then(() =>{
        console.log('Coupon Reedeemed');
    }).catch(err => console.log(err));
    
}


export default{
    getUser,
    createCoupon,
    getCoupon,
    assignCouponToTheNewUser,
    reedeemCoupon,
    getAllCouponsForUser
}