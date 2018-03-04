<template>
  <div>
    <p>Double Result: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter'
      ]),
      // write our own computed properties here
    
    // ALT VERSION 1
    // mapGetters([
    //   'doubleCounter',
    //   'stringCounter'
    // ])

    // ALT VERSION 2
    // computedCounter(){
    //   return this.$store.getters.doubleCounter;
    // },
    // computedCounterString(){
    //   return this.$store.getters.stringCounter;
    // } 
    }
  };
</script>

<style>

</style>