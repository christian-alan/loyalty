<script>
import IconPlaceholderView from './icons/IconPlaceholder.vue';
import IconAlarmView from './icons/IconAlarm.vue';

export default {
    props:{
        couponId:String,
        discount:String,
        subHeading:String,
        validity:String,
        couponProvider:String, 
        status:String
    },
    components:{
        IconPlaceholderView,
        IconAlarmView,
    },
    methods:{
        openCoupon(id,status){
            this.$router.push({path:`/${id}/${status}`});
        }
    },
    async created(){}
}
</script>

<template>
    <div @click="openCoupon(couponId,status)" class=" relative flex flex-row justify-between  items-center bg-white w-full">
        <!-- Left coupon cutting -->
        <div class="absolute top-1 -left-2">
            <svg class="fill-current" width="20" height="180" preserve-aspect-ratio="none">
                <circle cx="10" cy="20" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="48" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="78" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="108" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="138" r="10" fill="#5EA1F0" />
             </svg>
        </div>

        <!-- Right coupon cutting -->
        <div class="absolute top-1 -right-2">
            <svg class="fill-current" width="20" height="180" preserve-aspect-ratio="none">
                <circle cx="10" cy="20" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="48" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="78" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="108" r="10" fill="#5EA1F0" />
                <circle cx="10" cy="138" r="10" fill="#5EA1F0" />
            </svg>
        </div>
        <div class="flex flex-col w-3/4 p-6" style="border-right:dashed #C76D4A">
            <div class="flex flex-col mt-2">
                <h2 class="font-bold text-xl" style="font-family: 'IBM Plex Mono', monospace;">{{discount}}</h2>
                <p class="text-sm">{{subHeading}}</p>
            </div>

            <!-- Validity -->
            <div class="bg-lightOrange flex items-center mt-8 p-2">
                <IconAlarmView class="mr-1"></IconAlarmView>
                <p class="text-orange opacity-70 font-semibold text-sm">Valid till {{validity}}</p>
            </div>
        </div>
            <img  v-if="couponProvider==='Zara'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png'" class="w-32 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">
            <img  v-else-if="couponProvider==='GinaTricot'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gina_Tricot_logo.svg/2560px-Gina_Tricot_logo.svg.png'" class="w-32 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">
            <img  v-else-if="couponProvider==='h&m'" :src="'https://brandslogos.com/wp-content/uploads/images/large/hm-logo-1.png'" class="w-32 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">
            <img  v-else-if="couponProvider==='AcneStudios'" :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Acne_studios_logo%2C_2021.svg/2560px-Acne_studios_logo%2C_2021.svg.png'" class="w-32 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">
            <img  v-else-if="couponProvider==='CalvinKlein'" :src="'https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-Logo-1992.png'" class="w-32 -right-3 absolute h-auto object-cover rotate-90" alt="brand-image">

    </div>
</template>


