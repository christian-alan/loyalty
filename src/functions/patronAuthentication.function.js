import {  db } from '../main.js';
import {  ref, set } from "firebase/database";
import  Database from "./db.function.js";


// Protects the other rest of the routes from being accessed without authentication
async function authGuard(to, from, next) {
    // Check if the user is authenticated
    const isAuthenticated = checkIfUserIsAuthenticated();
    if (!isAuthenticated) {
      // If user is not authenticated and trying to access protected routes
      if (to.name !== 'login' && to.name !== 'register' && to.name !== 'registerBusiness') {
        // Redirect to the login page only if the current route is not one of the allowed routes
        next('/login');
        console.log('Redirecting to login')
      } else {
        // Allow navigation to the allowed routes
        next();
      }
    } else {
      // User is authenticated, allow navigation to the requested route
      next();
    }
}


function checkIfUserIsAuthenticated() {
    // // Retrieve the authentication token from the session storage or local storage
    const authToken = localStorage.getItem('userid');
    const email = localStorage.getItem('email');
    // if Token exist and user exists 
    if (authToken && email) return true
    else false;
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



// Creates a user in the database
async function createUser(credentials) {
    const userId = makeid();
    localStorage.setItem('userid', userId);
    set(ref(db, 'users/' + userId), {
        email: credentials.email,
        password: credentials.password,
        firstName:credentials.firstName,
        lastName:credentials.lastName,
    }).then((user) => {
      console.log('user created');
    }).catch((error)=>{
        console.log(error);
    });
}



// Allows users to access the other routes
async function authenticateUser(email,password) { 
    const authToken = localStorage.getItem('userid');
    const user = await Database.getUser(authToken);
   
    if(!authToken) console.log('Missing auth token') ;
    if(!authToken && !user) console.log('User does not exist');
    if(authToken && user) { 
       if(user.email !== email && user.password !== password) {
        console.log('Wrong Credentials')
       }
    }else {
      localStorage.setItem('email', email);
      console.log('user logged in');
    }
}


function deauthenticateUser(){
  localStorage.removeItem('email');
  console.log('user logged out');
}

export default{
    authGuard,
    checkIfUserIsAuthenticated,
    authenticateUser,
    createUser,
    deauthenticateUser
}