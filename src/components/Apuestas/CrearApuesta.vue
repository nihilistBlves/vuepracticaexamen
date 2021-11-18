<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-6 text-center">
      <h1>Realizar apuesta</h1>
      <p>Local: Real Madrid - Visitante: Atlético de Madrid</p>
      <form v-on:submit.prevent="crearApuesta">
          <div class="mb-3">
              <label class="form-label">Usuario</label>
              <input type="text" class="form-control" v-model="apuesta.usuario">
          </div>
          <div class="mb-3">
              <label class="form-label">Resultado</label>
              <input type="text" class="form-control" v-model="apuesta.resultado">
          </div>
          <div class="mb-3">
              <label class="form-label">Fecha</label>
              <input type="text" class="form-control" v-model="apuesta.fecha">
          </div>
          <button class="btn btn-success">Realizar apuesta</button>
      </form>
    </div>
  </div>
</template>

<script>
import ApuestasService from '../../services/ApuestasService'

const service = new ApuestasService();

export default {
    name: "CrearApuesta",
    data() {
        return {
            apuesta: {
                idApuesta: 0,
                usuario: "",
                resultado: "",
                fecha: ""
            }
        }
    },
    methods: {
        crearApuesta() {
            service.postApuesta(this.apuesta).then(result => {
                if(result) {
                    this.$router.push("/apuestas");
                }
            })
        }
    }
}
</script>

<style>

</style>