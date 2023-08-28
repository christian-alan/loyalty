<script>
export default {
    props:{
      count:[]
    },
    components:{}
}
</script>

<template>
        <div class="w-10 h-10 rounded-full flex items-center  bg-blue justify-center mr-2 font-bold" :class="counter.status==='ACTIVE'?' text-white':'bg-opacity-20 text-blue'" v-for="counter in count" :key="counter.id">
            {{ counter.id}}
        </div>
</template>


