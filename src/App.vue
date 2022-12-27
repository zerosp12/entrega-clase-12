<template>
  <div id="app" class="container">
      <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "App",
  created() {
    this.obtenerTablaAPI()
  },
  methods: {    
    ...mapActions(['obtenerTablaAPI']),
  },
};
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: white;
  box-shadow: 0px 0px 10px 3px rgba(0.5, 0.5, 0.5, 0.2);
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 60px 30px;
  text-align: left;
}
</style>
