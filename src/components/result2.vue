<template>
  <p>Double Result: {{ computedCounter }}</p>
</template>

<script>
  export default {
    computed: {
      computedCounter(){
        return this.$store.getters.doubleCounter
      } 
    }
  };
</script>

<style>

</style>