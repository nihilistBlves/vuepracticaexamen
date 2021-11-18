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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(apuesta, index) in apuestas" :key="index">
            <td>{{apuesta.usuario}}</td>
            <td>{{apuesta.resultado}}</td>
            <td>{{apuesta.fecha}}</td>
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
    }
  },
  mounted() {
    this.cargarApuestas();
  }
    
}
</script>

<style>

</style>