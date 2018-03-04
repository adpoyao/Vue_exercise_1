<template>
  <div id="app">
    <p>{{ msg }}</p>
    <counter></counter>
    <counter2></counter2>
    <results></results>
    <results2></results2>
  </div>
</template>

<script>
import Results from './components/results.vue';
import Results2 from './components/result2.vue';
import Counter from './components/counter.vue';
import Counter2 from './components/counter2.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Galaxy.'
    }
  },
  components: {
    Counter,
    Counter2,
    Results,
    Results2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
