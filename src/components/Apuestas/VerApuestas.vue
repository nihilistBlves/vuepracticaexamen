<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-6 text-center">
      <h1>Ver apuestas</h1>
      <router-link class="btn btn-primary" :to="'/apuestas/nueva'">Realizar apuesta</router-link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>USUARIO</th>
            <th>RESULTADO</th>
            <th>FECHA</th>
            <th>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(apuesta, index) in apuestas" :key="index">
            <td>{{apuesta.usuario}}</td>
            <td>{{apuesta.resultado}}</td>
            <td>{{apuesta.fecha}}</td>
            <td><button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" v-bind:data-bs-target="'#id' + apuesta.idApuesta">Eliminar</button></td>
            <div class="modal fade" v-bind:id="'id' + apuesta.idApuesta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">¿Estás seguro de eliminar esta apuesta?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" v-on:click="eliminarApuesta(apuesta.idApuesta)" data-bs-dismiss="modal" class="btn btn-danger">Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ApuestasService from '../../services/ApuestasService'

const service = new ApuestasService();

export default {
  name: "VerApuestas",
  data() {
    return {
      apuestas: [],
    }
  },
  methods: {
    cargarApuestas() {
      service.getApuestas().then(response => {
        this.apuestas = response;
      });
    },
    eliminarApuesta(idApuesta) {
      service.deleteApuesta(idApuesta).then(result => {
        if (result) {
          this.cargarApuestas();
        }
      });
    }
  },
  mounted() {
    this.cargarApuestas();
  }
    
}
</script>

<style>

</style>