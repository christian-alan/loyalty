<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export default{
  components:{
    HomeView
  }
}
</script>

<template>
  <RouterView v-slot="{Component,route}">

        <transition 
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
        >
          <component :is="Component" />
        </transition>

  </RouterView>
</template>

<style scoped>

</style>
