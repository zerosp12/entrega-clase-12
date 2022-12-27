<template>
  <div class="table-container">
    <h3>Lista Tabla</h3>
    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
            <th scope="col">Edad</th>
            <th scope="col">Ver +</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lista, index) in obtenerTabla()" :key="index">
            <td scope="row">{{ lista.nombre }}</td>
            <td>{{ lista.pais }}</td>
            <td>{{ lista.edad }}</td>
            <td><router-link :to="`/ver/${lista.id}`">Ver +
              </router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: "TablaLista",

  created() {
  },
  methods: {
    ...mapGetters(['obtenerTabla']),
  },
};
</script>

<style scoped>
.table-container {
  margin-top: 60px;
}
</style>