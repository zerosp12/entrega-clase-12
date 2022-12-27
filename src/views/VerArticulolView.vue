<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Parametro</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Nombre:</td>
            <td>{{ objetoView.nombre }}</td>
          </tr>
          <tr>
            <td scope="row">Checked:</td>
            <td>{{ obtenerChecked }}</td>
          </tr>
          <tr>
            <td scope="row">País:</td>
            <td>{{ objetoView.pais }}</td>
          </tr>
          <tr>
            <td scope="row">Edad:</td>
            <td>{{ objetoView.edad }}</td>
          </tr>
          <tr>
            <td scope="row">Comentarios:</td>
            <td>{{ objetoView.comentarios }}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-warning" @click="$router.go(-1)">Volver</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  name: "VerArticuloView",
  data() {
    return {
      objetoView: [],
    }
  },
  created() {
    const id = this.$route.params.id
    this.objetoView = this.obtenerTabla().find(x => x.id == id)
  },
  methods: {
    ...mapGetters(["obtenerTabla"]),
  },

  computed: {
    obtenerChecked() {
      return this.objetoView.checked ? "Si" : "No";
    },
  }
}
</script>
