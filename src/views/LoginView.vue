<template>
    <div class="w-screen h-screen flex flex-col items-center pt-16 common-container">
        <LogoVue></LogoVue>

         <!-- Implementing active and used through radio btns -->
    <div class="flex mb-1 w-full mt-10">
        <div class=" relative w-1/2 flex items-center justify-center">

            <input type="radio" id="active" name="active" v-model="tab" value="patron" />
            <label class="radio-label text-center" for="active">Patron</label>
        </div>  
        <div class="relative w-1/2 flex items-center justify-center">

            <input  type="radio" id="used" name="used" v-model="tab" value="business"/>
            <label class="radio-label text-center" for="used">Business</label>
        </div>
    </div>

    <!-- Login for Patron -->
    <transition 
        enter-active-class="animate__animated  animate__lightSpeedInLeft"
        mode="out-in"
    >
        <div v-if="tab==='patron'" class="relative flex flex-col items-center justify-center py-5 px-6 bg-white w-full mt-4">
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
    
                </svg>
            </div>
            
            <!-- Headline -->
            <div class="text-blue w-full pb-4" style="border-bottom:1px dashed #5EA1F0">

                <h1 class="text-xl font-bold ">Save more & Shop more</h1>
                <p class="font-medium">With Loyalty, get the best offers and the best deals from your local brands</p>
            </div>
            <!-- Credentials  -->

            <!-- form -->
            <div class="flex flex-col w-full mt-8">
                <div>
                    <label for="email-field" class="text-sm text-blue font-bold">Your  email</label>
                    <input type="email" v-model="emailPat" placeholder="Email" name="email-field" class="input-field w-full mt-1">
                </div>
                <div class="mt-2">
                    <label for="password-field" class="text-sm text-blue font-bold">Your password</label>
                    <input type="password" v-model="passwordPat" name="password-field" placeholder="Password" class="input-field w-full mt-1">
                </div>
                <button @click="loginUser(emailPat,passwordPat)" ref="login" :disabled="isDisabled" :class="isDisabled?'btn w-full mt-4 opacity-30':'btn w-full mt-4'">Login</button>

                 <!-- <div >
                    <div class="bg-blue bg-opacity-10 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-blue font-bold my-2">OR</div>
                </div> -->
                
                <button @click="gotoRegister()" class="btn-two w-full mt-2">Register</button>

            </div>
        </div>
    </transition>

<!-- Login for Business -->
<transition 
    enter-active-class="animate__animated animate__lightSpeedInRight"
    mode="out-in"
    >
    <div v-if="tab==='business'" class="relative flex flex-col items-center justify-center py-5 px-6 bg-white w-full mt-4">
        <!-- Left coupon cutting -->
        <div class="absolute top-1 -left-2 z-10">
            <svg class=" fill-current" width="20" height="700" preserve-aspect-ratio="none">
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
             </svg>
        </div>

        <!-- Right coupon cutting -->
        <div class="absolute top-1 -right-2 z-10">
            <svg class=" fill-current" width="20" height="700" preserve-aspect-ratio="none">
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

            </svg>
        </div>
        
          <!-- Headlines -->
        <div class="text-blue pb-4 w-full flex flex-col" style="border-bottom:1px dashed #5EA1F0">

            <h1 class="text-xl font-bold ">Earn your patron's loyalty</h1>
            <p class="font-medium">With Loyalty, increase your customer base and revenue</p>
        </div>
        <!-- Credentials  -->

        <!-- form -->
        <div class="flex flex-col w-full mt-8">
            <div>
                <label for="email-field" class="text-sm text-blue font-bold">Business email</label>
                <input type="email" v-model="emailBiz" placeholder="Email" name="email-field" class="input-field w-full mt-1">
            </div>
            <div class="mt-2">
                <label for="password-field" class="text-sm text-blue font-bold">Password</label>
                <input type="password" v-model="passwordBiz" name="password-field" placeholder="Password" class="input-field w-full mt-1">
            </div>

            <button @click="loginUser(emailBiz,passwordBiz)" ref="loginBiz" :disabled="isDisabled" :class="isDisabled?'btn w-full mt-4 opacity-30':'btn w-full mt-4'">Login</button>

             <!-- <div >
                <div class="bg-blue bg-opacity-10 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-blue font-bold my-2">OR</div>
            </div> -->
            
            <button @click="gotoRegisterBusiness()" class="btn-two w-full mt-2">Register business</button>

        </div>
    </div>
</transition>
    </div>
</template>

<script>
import LogoVue from '@/components/icons/Logo.vue';
import AuthGuard from '@/functions/patronAuthentication.function.js';


export default{
    components:{
        LogoVue,
    },
    data(){
        return {
            passwordPat:'',
            emailPat:'',
            passwordBiz:'',
            emailBiz:'',
            tab:'patron'
        }
    },
    methods:{
        gotoRegister(){
            this.$router.push({path:`/register`})
        },
        gotoRegisterBusiness(){
            this.$router.push({path:`/registerBusiness`})
        },
        enableButton() {
            this.$refs.login.removeAttribute('disabled');
        },
        disableButton() {
            this.$refs.login.setAttribute('disabled', 'disabled');
        },
        enableBizButton() {
            this.$refs.loginBiz.removeAttribute('disabled');
        },
        disableBizButton() {
            this.$refs.loginBiz.setAttribute('disabled', 'disabled');
        },
        loginUser(email,password){
            AuthGuard.authenticateUser(email,password);
            this.$router.push({path:`/`})
        },
    },
    computed:{
        isDisabled(){
            return !(this.passwordPat && this.emailPat);
        }
    },
    watch:{
        passwordBiz(newValue) {
            if (!newValue || !this.emaiBiz ) {
                this.disableBizButton();
            } else {
                this.enableBizButton();
            }
        },  
      emailBiz(newValue) {
                if (!newValue || !this.passwordBiz) {
                this.disableBizButton();
            } else {
                this.enableBizButton();
            }
        },
      passwordPat(newValue) {
            if (!newValue || !this.emailPat ) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        },  
      emailPat(newValue) {
                if (!newValue || !this.passwordPat ) {
                this.disableButton();
            } else {
                this.enableButton();
            }
        }
    }, 
}
</script>

<style scoped>
input[type='radio']{
    appearance:none;
    position: absolute;
    right: 0px;
    width:60px;
    height:35px;
}

input[type='radio']:checked + .radio-label{
    border-bottom: 3px solid white;
    background-color:#FFFFFF20;
}

.radio-label{
    color: white;
    font-weight:bold;
    width:100%;
    padding-top: 8px;
    padding-bottom: 8px;
}

</style>