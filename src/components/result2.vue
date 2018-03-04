<template>
  <p>Double Result: {{ computedCounter }}</p>
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