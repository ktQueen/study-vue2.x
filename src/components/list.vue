<template>
  <div>list
    <p>{{msg}}</p>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'list',
  store,
  components: {
    
  },
  data(){
    return {
      msg:store.state.count
    }
  }
}
</script>

<style>
</style>
