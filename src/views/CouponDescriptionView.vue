<script>
import IconPlaceholderView from '../components/icons/IconPlaceholder.vue';
import IconAlarmView from '../components/icons/IconAlarm.vue';
import db from '../functions/db.function';
import StreaksView from '../components/Streaks.vue';

export default{
    components:{
        IconPlaceholderView,
        IconAlarmView,
        StreaksView
    },
    data(){
        return{
            status:'',
            coupon:{},
            counter:[
                {
                    id:1,
                    status:'ACTIVE'
                },
                {
                    id:2,
                    status:'ACTIVE'
                },
                {
                    id:3,
                    status:'ACTIVE'
                },
                {
                    id:4,
                    status:'ACTIVE'
                },
                {
                    id:5,
                    status:'INACTIVE'
                }
            
            ]
        }
    },
    methods:{
        gotoHome(){
            this.$router.push({path:`/`});
        },
        reedeemCoupon(){
            db.reedeemCoupon(this.$route.params.id);
            this.status = 'used';
        }
    },
    async created(){
        this.coupon = await db.getCoupon(this.$route.params.id);
        this.status = this.$route.params.status;
        console.log(this.$route.params.status);
    }

}
</script>

<template>

        <div class="w-screen h-screen px-2.5 pb-16 flex flex-col items-center justify-between">
        <div class=" relative flex flex-col bg-white w-full mt-16 pb-4">
            
            <!-- Left coupon cutting -->
            <div class="absolute top-1 -left-2 z-10">
                <svg class="w-full h-auto fill-current" width="20" height="700" preserve-aspect-ratio="none">
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
                <svg class="w-full h-auto fill-current" width="20" height="700" preserve-aspect-ratio="none">
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


            <!-- Coupon design -->
            <div class="w-full flex flex-row relative" style="border-bottom:dashed #C76D4A">
                <!-- Coupon name -->
                <div class="flex flex-col w-3/4 p-6" style="border-right:dashed #C76D4A">
                    <div class="flex flex-col mt-2">
                        <h2 class="font-bold text-2xl" style="font-family: 'IBM Plex Mono', monospace;">{{coupon.discount}}</h2>
                        <p class="text-sm">{{coupon.subHeading}}</p>
                    </div>

                    <!-- Validity -->
                    <div class="bg-lightOrange flex items-center mt-8 p-2">
                        <IconAlarmView class="mr-1"></IconAlarmView>
                        <p class="text-orange opacity-70 font-semibold text-sm">Valid till {{coupon.validity}}</p>
                    </div>
                </div>

                <!-- Brand images -->
                <img  v-if="coupon.couponProvider==='Zara'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png'" class="w-32 -right-3 top-16 absolute h-auto object-cover rotate-90" alt="brand-image">
                <img  v-else-if="coupon.couponProvider==='GinaTricot'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gina_Tricot_logo.svg/2560px-Gina_Tricot_logo.svg.png'" class="w-32 -right-3 absolute top-20 h-auto object-cover rotate-90" alt="brand-image">
                <img  v-else-if="coupon.couponProvider==='h&m'" :src="'https://brandslogos.com/wp-content/uploads/images/large/hm-logo-1.png'" class="w-32 -right-3 top-16 absolute h-auto object-cover rotate-90" alt="brand-image">
                <img  v-else-if="coupon.couponProvider==='AcneStudios'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Acne_studios_logo%2C_2021.svg/2560px-Acne_studios_logo%2C_2021.svg.png'" class="w-32 -right-3 top-20 absolute h-auto object-cover rotate-90" alt="brand-image">
                <img  v-else-if="coupon.couponProvider==='CalvinKlein'" :src="'https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-Logo-1992.png'" class="w-32 top-12 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">

            </div>

            <!-- Streaks -->
            <div class="w-full px-6 flex items-center justify-center mt-5">
                 <StreaksView :count="counter"></StreaksView>
            </div>
            <!-- Last punch -->
            <div class="w-full px-6 flex items-center justify-center mt-3">
                 <p class="text-sm opacity-50">Last purchase made on 19th August 2023</p>
            </div>
            <!-- Coupon description -->
            <div class="p-6 flex flex-col items-center">
                <!-- Description -->
                <p class="text-center text-sm font-medium">{{coupon.description}}</p>
            </div>


            <!-- Reedem coupon -->
            <div class="px-6" v-if="status === 'active'">
                <button @click="reedeemCoupon()" class="btn w-full">
                    Reedeem coupon
                </button>

            </div>

        </div>

        <button @click="gotoHome()">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="34" cy="34" r="34" fill="#F9F0ED"/>
                <path d="M24.6896 24L44 43.3103" stroke="#5EA1F0" stroke-width="5" stroke-linecap="round"/>
                <path d="M44 24L24 43.3103" stroke="#5EA1F0" stroke-width="5" stroke-linecap="round"/>
            </svg>     
        </button>
    </div>

</template>

<style>


</style>