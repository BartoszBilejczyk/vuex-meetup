<template>
  <div class="app">
    <div class="item">
      <h1>Zawodnik</h1>
      <h2>{{ user.name }}</h2>
      <img v-if="user.isKoksu" src="https://i.ytimg.com/vi/NW5oqPIaUuU/maxresdefault.jpg">
      <img v-else src="http://cdn.24.co.za/files/Cms/General/d/6597/ffa8df39ce894bd78a843d8465832d4f.jpg">
    </div>
    <div class="item">
      <h2>Suple List</h2>
      <table>
        <tr>
          <td class="label">Name</td>
          <td class="label">Price</td>
          <td class="label">Power</td>
          <td />
        </tr>
        <tr
          v-for="suple in proteinSuple"
          :key="suple.id"
          :class="{ 'power': suplePowerful.includes(suple.power) }"
        >
          <td>{{ suple.name }}</td>
          <td>{{ suple.price }}</td>
          <td>{{ suple.power }}</td>
          <td>
            <button @click="updateUserDetails(suple.power)">Give him this suple</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const suple = createNamespacedHelpers('suple');
  const user = createNamespacedHelpers('user');
  const meta = createNamespacedHelpers('meta');

  export default {
    name: 'App',
    computed: {
      ...suple.mapGetters(['proteinSuple']),
      ...user.mapGetters(['user']),
      ...meta.mapGetters(['suplePowerful'])
    },
    methods: {
      ...suple.mapActions([
        'hydrateSuple',
        'updateSuplePrice'
      ]),
      ...user.mapActions([
        'getUser',
        'updateUserDetails'
      ]),
      ...meta.mapActions(['hydrateSupleSettings']),
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item {
    padding: 50px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  tr {
    height: 40px;
  }

  td {
    padding: 5px;
  }

  .label {
    font-size: 20px;
    font-weight: bold;
  }

  button {
    font-size: 16px;
    text-shadow: none;
    box-shadow: none;
    border-radius: 0;
    position: relative;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-width: 460px;
    background: #2c3e50;
    color: white;

    &:active,
    &:focus {
      outline: 0;
    }
  }

  .power {
    background: rgba(0,0,0, 0.2);
  }
</style>
