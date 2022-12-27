<template>
  <div>
    <h3>Proyecto Clase 12</h3>
    <hr />
    <vue-form :state="formstate" @submit.prevent="onSubmit" name="formulario">
      <validate auto-label class="form-group required-field mb-3">
        <label>Nombre</label>
        <input
          v-model="model.nombre"
          type="text"
          name="nombre"
          class="form-control"
          :class="obtenerClassEstado(formstate.nombre)"
          @keydown.enter="sigFocus"
          required
        />
        <field-messages name="nombre" show="$touched || $submitted">
          <div class="text-success">Correcto!</div>
          <div slot="required" class="text-danger">
            Debes ingresar un Nombre
          </div>
        </field-messages>
      </validate>
      <validate auto-label class="form-group required-field mb-3">
        <input
          v-model="model.checked"
          class="form-check-input"
          type="checkbox"
          name="checked"
          :class="obtenerClassEstado(formstate.checkbox)"
          @keydown.enter="sigFocus"
          required
        />
        <label class="chkbox-label"> Este Checkbox es Obligatorio</label>
        <field-messages name="checked" show="$touched || $submitted">
          <div class="text-success">Correcto!</div>
          <div slot="required" class="text-danger">
            Este CheckBox es Obligatorio
          </div>
        </field-messages>
      </validate>
      <validate auto-label class="form-group required-field mb-3">
        <label>País</label>
        <select
          v-model="model.pais"
          class="form-select"
          name="pais"
          :class="obtenerClassEstado(formstate.pais)"
          @keydown.enter="sigFocus"
          required
        >
          <option value="" selected>Selecciona un País...</option>
          <option value="Argentina">Argentina</option>
          <option value="Perú">Perú</option>
          <option value="Uruguay">Uruguay</option>
        </select>
        <field-messages name="pais" show="$touched || $submitted">
          <div class="text-success">Correcto!</div>
          <div slot="required" class="text-danger">
            Debes seleccionar un País
          </div>
        </field-messages>
      </validate>
      <validate auto-label class="form-group required-field mb-3">
        <label>Edad</label>
        <input
          v-model="model.edad"
          type="number"
          class="form-control"
          name="edad"
          min="0"
          max="100"
          value="18"
          @keydown.enter="sigFocus"
          required
        />
        <field-messages name="edad" show="$touched || $submitted">
          <div class="text-success">Correcto!</div>
          <div slot="required" class="text-danger">Debes ingresar una Edad</div>
        </field-messages>
      </validate>
      <validate auto-label class="form-group mb-3">
        <label>Comentarios</label>
        <textarea
          v-model="model.comentarios"
          class="form-control"
          name="comentarios"
          maxlength="30"
          rows="3"
          :class="obtenerClassEstado(formstate.comentarios)"
          @keydown.enter="sigFocus"
        ></textarea>
        <small class="form-text text-muted"
          >{{ countCaracteres }} / 30 máximo</small
        >
        <field-messages name="comentarios" show="$touched || $submitted">
          <div class="text-success">Correcto!</div>
          <div slot="minlength" class="text-danger">
            Los comentarios deben como máximo de 30 caracteres.
          </div>
        </field-messages>
      </validate>
      <button type="submit" class="btn btn-primary fw-bold">
        Ingresar a la Lista
      </button>
    </vue-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';

export default {
  name: "FormularioNuevo",
  data() {
    return {
      formstate: {},
      model: {
        nombre: "",
        checked: false,
        pais: "",
        edad: 18,
        comentarios: "",
      },
    };
  },
  computed: {
    countCaracteres() {
      return this.model.comentarios.length;
    },
  },
  methods: {
    ... mapMutations(['agregarItemTabla']),

    obtenerClassEstado(field) {
      if (!field) return "";

      if (field.$touched || field.$submitted) {
        return field.$valid ? "is-valid" : "is-invalid";
      }

      return "";
    },
    sigFocus(event) {
      event.preventDefault();

      const inputs = Array.from(
        event.target.form.querySelectorAll("input, textarea, select, button")
      );
      const index = inputs.indexOf(event.target);

      if (index < inputs.length) {
        inputs[index + 1].focus();
      }

      return false;
    },
    resetState: function () {
      this.formstate._reset();
    },
    onSubmit() {

      if (this.formstate.$valid) {

        const valorAdd = {
          id: 0,
          nombre: this.model.nombre,
          checked: this.model.checked,
          pais: this.model.pais,
          edad: this.model.edad,
          comentarios: this.model.comentarios,
        }

        axios.post('https://639a60473a5fbccb5265ab59.mockapi.io/clase-12', valorAdd)
        .then(resp => {

            if(resp.status == 201) {
              this.agregarItemTabla(resp.data)
            }
        })

        this.model = {
          nombre: "",
          checked: false,
          pais: "",
          edad: 18,
          comentarios: "",
        };
        
        this.resetState();
      }
    },
  },
};
</script>

<style scoped>
input,
textarea {
  cursor: pointer;
}
.chkbox-label {
  padding-left: 8px;
  padding-top: 1px;
}

.required-field > label::after {
  content: "*";
  color: red;
  margin-left: 0.25rem;
}
</style>