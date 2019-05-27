<template>
  <div>
    <h1>{{ randomNumber }}</h1>
    <button @click="getRandomNumber">Get new number</button>
  </div>
</template>


<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    computed: {
      randomNumber() {
        return this.$store.state.randomNumber
      }
    },
    methods: {
      ...mapActions(['newRandomNumber'])
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
