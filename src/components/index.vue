<template>
  <div>
    {{count}}
    {{this.$store.state.count}}
    <button @click="submit">按钮</button>
    <span @click="goList">列表页</span>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'index',
  store,
  computed:{
    count(){
        return this.$store.state.count
    }
  },
  methods:{
    submit(){
      store.commit('increment') 
    },
    goList(){
      this.$router.push('/list')
    }
  }
}
</script>

<style>
</style>
