<template>
  <div>
    <p>This is Counter 1</p>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations([
        'increment', 
        'decrement'
      ])

      // increment(){
        // Alt Method 1
        // this.$store.commit('increment');
        
        // Alt Method 2
        // this.$store.state.counter++
      // },
      // decrement(){
        // Alt Method 1
        // this.$store.commit('decrement');
        
        // Alt Method 2
        // this.$store.state.counter--
      // }
    }
  };
</script>

<style>
  
</style>