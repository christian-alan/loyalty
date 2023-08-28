<script>
import LogoWhiteVue from '@/components/icons/Logo.vue';

import LogoDarkVue from '@/components/icons/LogoDark.vue';
import IconMenuView from '@/components/icons/IconMenu.vue';
import IconUserView from '@/components/icons/IconUser.vue';
import IconSearchView from '@/components/icons/IconSearch.vue';
import IconLogoutView from '@/components/icons/IconLogout.vue';

import AuthGuard from '@/functions/patronAuthentication.function.js';


export default{
    components:{
        LogoWhiteVue,
        IconMenuView,
        IconUserView,
        IconSearchView,
        LogoDarkVue,
        IconLogoutView
    },
    data(){ 
        return {
            show:false,
            changeAssets:false
        }
    },
    methods:{
        logout(){
            AuthGuard.deauthenticateUser();
            this.$router.push('/login')
        }
    },
    async created(){
        window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 20){
                    this.changeAssets = true;
                }else{
                    this.changeAssets= false;
                }
      })
    }

}
</script>

<template>
    <nav class="py-5 w-full flex justify-between">
        <LogoWhiteVue v-if="!changeAssets"></LogoWhiteVue>
        <LogoDarkVue v-if="changeAssets"></LogoDarkVue>
        
        <div class="flex">
            <button class="flex mr-2 flex-col items-center justify-center p-2 h-11 w-11 bg-white rounded-full">  
                <IconSearchView></IconSearchView>
            </button>
            <button>  
                <img class="h-11 mr-2 w-11 object-cover rounded-full" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="profile picture">
            </button>
            <button @click="logout()" class="flex mr-2 flex-col items-center justify-center p-2 h-11 w-11 bg-white rounded-full">  
                <IconLogoutView></IconLogoutView>
            </button>
            <!-- <button @click="show = !show" class="flex flex-col items-center">  
                <IconMenuView></IconMenuView>
                <small>Menu</small>
            </button> -->
        </div>
    </nav>

    <transition class="absolute right-0" name="slide">
        <div class="bg-violet p-4 rounded-l-lg shadow-lg" v-if="show">
            
            <ol class="nav-links w-36">
                <li class="link"><IconUserView></IconUserView> <p class="font-bold">Patrons</p></li>
  
            </ol>

        </div>
    </transition>


</template>

<style scoped>

.slide-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-leave-active {
    transition: all 0.5s ease-in;
  }
  
  .slide-enter-from,.slide-leave-to {
    transform: translateX(200px);
  }


  .nav-links ol {
    list-style-type: none;
    padding-left: 0;

  }
  
  .link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
  }
  
 
</style>
