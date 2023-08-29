<template>
    <div class="w-screen h-screen flex flex-col items-center pt-24 common-container">
        <LogoVue></LogoVue>

        <div class="relative flex flex-col items-center justify-center py-10 px-6 bg-white w-full mt-8">
            <!-- Left coupon cutting -->
            <div class="absolute top-1 -left-2 z-10">
                <svg class="fill-current" width="20" height="700" preserve-aspect-ratio="none">
                    <circle cx="10" cy="20" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="48" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="78" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="108" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="138" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="168" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="198" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="228" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="258" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="288" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="318" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="348" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="378" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="408" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="438" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="468" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="498" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="528" r="10" fill="#5EA1F0" />
                 </svg>
            </div>
    
            <!-- Right coupon cutting -->
            <div class="absolute top-1 -right-2 z-10">
                <svg class="fill-current" width="20" height="700" preserve-aspect-ratio="none">
                    <circle cx="10" cy="20" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="48" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="78" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="108" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="138" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="168" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="198" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="228" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="258" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="288" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="318" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="348" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="378" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="408" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="438" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="468" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="498" r="10" fill="#5EA1F0" />
                    <circle cx="10" cy="528" r="10" fill="#5EA1F0" />
    
                </svg>
            </div>
            
            <div class="text-blue pb-4 w-full" style="border-bottom:1px dashed #5EA1F0">

                <h1 class="text-xl font-bold ">Register as a patron</h1>
            </div>
            <!-- Credentials  -->

            <!-- form -->
            <div class="flex flex-col w-full">
                <div class="mt-2">
                    <label for="email" class="text-sm text-blue font-bold">Your email</label>   
                    <input type="email" v-model="email" placeholder="Email" name="email" class="input-field w-full mt-1">
                </div>
              

                <div class="flex flex-row">
                    <div class="mt-2 mr-1">
                        <label for="f-name" class="text-sm text-blue font-bold">Your first name</label>   
                        <input type="text" v-model="fName" placeholder="First name" name="f-name" class="input-field w-full mr-1 mt-1">
                    </div>

                    <div class="mt-2 ml-1">
                        <label for="l-name" class="text-sm text-blue font-bold">Your last name</label>   
                        <input type="text" v-model="lName" placeholder="Last name" name="l-name" class="input-field w-full mr-1 mt-1">
                    </div>
                </div>


                <div class="mt-2">
                    <label for="password" class="text-sm text-blue font-bold">Your password</label>   
                    <input type="password" v-model="password" placeholder="Password" name="password" class="input-field w-full mt-1">
                </div>
              

                <button @click="registerUser(fName,lName,email,password)" ref="register" :disabled="isDisabled" :class="isDisabled?'btn w-full mt-4 opacity-30':'btn w-full mt-4'" >Register</button>
                
                <button @click="gotoLogin()" class="btn-two w-full mt-2">Go back to login</button>


            </div>
        </div>

    </div>
</template>

<script>
import LogoVue from '@/components/icons/Logo.vue';
import AuthGuard from '@/functions/patronAuthentication.function.js';
import DB from '@/functions/db.function.js';


export default{
    components:{
        LogoVue,
    },
    data(){
        return {
            fName:'',
            lName:'',
            password:'',
            email:'',
        }
    },
    computed:{
        isDisabled(){
            return !(this.fName && this.lName && this.password && this.email);
        }
    },
    watch:{
        fName(newValue) {
            if (!newValue || !this.password || !this.email || !this.lName) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        },
        password(newValue) {
                if (!newValue || !this.fName || !this.email || !this.lName) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        },  
        lName(newValue) {
                if (!newValue || !this.fName || !this.email || !this.pasword) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        },
        email(newValue) {
                if (!newValue || !this.fName || !this.password || !this.lName) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        }
    },    
    methods:{
        gotoLogin(){
            this.$router.push({path:`/`})
        },
        registerUser(
                firstName,
                lastName,
                email,
                password
            ){   
                
            // user gets registered 
            AuthGuard.createUser({
                firstName,
                lastName,
                email,
                password
            });

            // All the coupons get added to the newly registered coupons
            DB.assignCouponToTheNewUser();

            this.$router.push('/login');
        },
        enableButton() {
            this.$refs.register.removeAttribute('disabled');
        },
        disableButton() {
            this.$refs.register.setAttribute('disabled', 'disabled');
        },
       
    }

}
</script>