<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="col-6 text-center">
          <h1>Detalles equipo</h1>
          <div class="card">
            <div class="card-header">
              {{equipo.nombre}}
            </div>
            <div class="card-body">
              <img v-bind:src="equipo.imagen" height="200px">
              <h3>Champions: {{equipo.champions}}</h3>
              <p>{{equipo.descripcion}}</p>
              <router-link class="btn btn-primary m-1" :to="'/equipos/'+equipo.idEquipo+'/jugadores'">Ver jugadores</router-link>
              <router-link class="btn btn-secondary m-1" :to="'/home'">Volver</router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import EquiposService from '../../services/EquiposService'

const service = new EquiposService();

export default {
    name: "DetallesEquipo",
    data() {
        return {
            idEquipo: 0,
            equipo: {}
        }
    },
    methods: {
        cargarEquipo() {
            service.getEquipoById(this.idEquipo).then(result => {
                this.equipo = result;
            });
        }
    },
    mounted() {
        this.idEquipo = this.$route.params.idEquipo;
        this.cargarEquipo();
    }
}
</script>

<style>

</style>