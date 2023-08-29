<script>
import NavBar from '@/components/Nav.vue';
import CouponView from '@/components/Coupon.vue';
import Database from '@/functions/db.function.js';
import {  db } from '../main.js';
import {  onValue,ref } from "firebase/database";
import { RouterLink, RouterView } from 'vue-router';
import DB from '@/functions/db.function.js';

export default{
    components:{
        NavBar,
        CouponView,
    },
    data() {
        return {
            coupons: {},
            changeBg:false,
            tab:''
        }
    },
    methods:{
      async createCoupon(discount,validity,subHeading,couponProvider){
        await Database.createCoupon(discount,validity,subHeading,couponProvider);
      },
      getAllCoupons(){
        const starCountRef = ref(db, 'coupons');
        onValue(starCountRef, (snapshot) => {
              this.coupons = Object.entries(snapshot.val()); 
           
        });
      }
    },
    async created(){
        // this.createCoupon('40% Off','https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png','30 October 2023','On your 5th purchase of 500 SEK','Zara');
        // this.getAllCoupons();
       await DB.getAllCouponsForUser().then((coupons)=>{
            this.coupons = coupons;
            this.tab = 'active';
       });
       
        // Event listener to detect Navbar's scroll postion
        window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY
                if (scrollPosition > 20){
                    this.changeBg = true;
                }else{
                    this.changeBg= false;
                }

      })
    },
    async destroyed() {
        // Event listener to remove Navbar's scroll postion
        window.removeEventListener('scroll', ()=>{
            console.log('scrolling event listener removed');
         })
    },


}
</script>

<template>
<div ref="homeView" class="relative common-container">    
    <div class="fixed top-0 w-full left-0 z-20 px-2.5" :class="changeBg?'bg-white hard-shadow':''">
         <NavBar></NavBar>
    </div>
    
    <!-- Amount saved -->
    <div class="px-6 py-5 mt-24 flex justify-between items-center bg-white w-full hard-shadow">

        <div>
            <p class="text-sm">
                You have
            </p>
            <h1 style="font-family: 'IBM Plex Mono', monospace;" class="text-2xl p-0 m-0 font-bold">Save</h1>
        </div>
        
        <h1 class="text-2xl font-bold" style="font-family: 'IBM Plex Mono', monospace;">2300.00 SEK</h1>
    </div>


    <!-- Coupons -->
    <div class="mt-6 flex flex-col">
    


    <!-- Implementing through page logic  -->

    <!-- <div class="flex mb-4">
        <router-link class="font-bold  text-white py-2" :to="'/active'"> Active</router-link>
        <router-link class="font-bold  text-white py-2 ml-4" :to="'/used'">Used</router-link>
    </div>


    <div class="-z-10">
    <router-view
        v-slot="{Component}"
    >
        <transition 
            enter-active-class="animate__animated animate__lightSpeedInRight"
            mode="out-in"
        >
            <component :is="Component" />
        </transition>
    </router-view>
    </div> -->



    <!-- Implementing active and used through radio btns -->
    <div class="flex mb-4">
        <div class="mr-4 relative">

            <input type="radio" id="active" name="active" v-model="tab" value="active" />
            <label for="active">Active</label>
        </div>  
        <div class="mr-4 relative">

            <input  type="radio" id="used" name="used" v-model="tab" value="used"/>
            <label for="used">Used</label>
        </div>
    </div>

<transition 
    enter-active-class="animate__animated animate__lightSpeedInRight"
    mode="out-in"
>
    <div v-if="tab==='active'">
        <CouponView 
        class='mb-4'
            v-for="coupon in coupons.activeCoupons"
            :key="coupon[1].id" 
            :couponId="coupon[0]"
            :discount="coupon[1].discount" 
            :subHeading="coupon[1].subHeading"
            :validity="coupon[1].validity"
            :couponProvider="coupon[1].couponProvider"
            status="active"
            >
        </CouponView>
    </div>
</transition>

<transition 
    enter-active-class="animate__animated animate__lightSpeedInRight"
    mode="out-in"
>
    <div v-if="tab==='used'">
        <CouponView 
        class='mb-3'
            v-for="coupon in coupons.usedCoupons"
            :key="coupon.id" 
            :couponId="coupon[0]"
            :discount="coupon[1].discount" 
            :subHeading="coupon[1].subHeading"
            :validity="coupon[1].validity"
            :couponProvider="coupon[1].couponProvider"
            status="used">
        </CouponView>
    </div>
    
</transition>
</div>


</div>

    
</template>

<style scoped>

a.router-link-active{
    border-bottom: 4px solid white;
}

input[type='radio']{
    appearance:none;
    position: absolute;
    right: 0px;
    width:60px;
    height:35px;
}

input[type='radio']:checked + label{
    border-bottom: 3px solid white;
}

label{
    color: white;
    font-weight:bold;
}


</style>
