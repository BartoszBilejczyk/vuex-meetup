<template>
  <div class="app">
    <div class="item">
      <h1>Zawodnik</h1>

      <img v-if="isKoksu" src="https://i.ytimg.com/vi/NW5oqPIaUuU/maxresdefault.jpg">
      <img v-else src="http://cdn.24.co.za/files/Cms/General/d/6597/ffa8df39ce894bd78a843d8465832d4f.jpg">
    </div>
    <div class="item">
      <h2>Suple List</h2>
      <div
        v-for="suple in proteinSuple"
        :key="suple.id"
      >
        {{ suple.name }}
        {{ suple.price }}
        {{ suple.power }}
        <button>Give him some of this suple</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'proteinSuple',
        'suplePowerful',
        'isKoksu'
      ])
    },
    methods: {
      ...mapActions([
        'hydrateSuple',
        'updateSuplePrice',
        'getUser',
        'updateUserDetails',
        'hydrateSupleSettings'
      ])
    },
    created() {
      this.getUser();
      this.hydrateSupleSettings();
      this.hydrateSuple();
    }
  }
</script>

<style lang="scss">
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
