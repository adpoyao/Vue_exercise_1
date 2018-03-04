<template>
  <p>Result: {{ computedCounter }}</p>
</template>

<script>
  export default {
    computed: {
      computedCounter(){
        return this.$store.state.counter
      } 
    }
  };
</script>

<style>

</style>