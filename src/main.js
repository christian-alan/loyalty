import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getDatabase} from "firebase/database";

const app = createApp(App)
const firebaseConfig = {
    apiKey: "AIzaSyCd_8RxR0XwqDs3sdrp4sGMC2Dv37chSlU",
    authDomain: "loyalty-tracker-390cd.firebaseapp.com",
    projectId: "loyalty-tracker-390cd",
    storageBucket: "loyalty-tracker-390cd.appspot.com",
    messagingSenderId: "142147708364",
    appId: "1:142147708364:web:1042d249f537941f46a969",
    measurementId: "G-TFLTEZ3138"
  };

app.use(router)


const firebase = initializeApp(firebaseConfig); 
// export const storage = getStorage(firebase, "gs://greener-app-2618b.appspot.com");
export const db = getDatabase(firebase, "https://loyalty-tracker-390cd-default-rtdb.firebaseio.com/");

app.mount('#app')
