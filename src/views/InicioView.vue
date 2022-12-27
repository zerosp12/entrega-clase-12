<template>
  <div>
    <formulario-nuevo />
    <tabla-lista />
  </div>
</template>

<script>
import FormularioNuevo from "@/components/FormularioNuevo.vue";
import TablaLista from "@/components/TablaLista.vue";

export default {
  name: 'HomeView',
  components: {
    FormularioNuevo,
    TablaLista
  }
}
</script>
