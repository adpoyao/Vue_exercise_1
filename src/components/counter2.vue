<template>
  <div>
    <p>This is Counter 2</p>
    <button @click="asyncIncrement(100)">Async Increment</button>
    <button @click="asyncDecrement(100)">Async Decrement</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions([
        'increment', 
        'decrement',
        'asyncIncrement',
        'asyncDecrement'
      ])
    }
  };
</script>

<style>
  
</style>