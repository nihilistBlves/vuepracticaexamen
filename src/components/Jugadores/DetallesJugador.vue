<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-6 text-center" v-if="jugador">
        <h1>Detalles jugador</h1>
        <div class="card">
            <div class="card-header">
              {{jugador.nombre}}
            </div>
            <div class="card-body">
              <img v-bind:src="jugador.imagen" height="200px">
              <h3>Posición: {{jugador.posicion}}</h3>
              <p>{{jugador.fechaNacimiento}}</p>
              <p>Pais: {{jugador.pais}}</p>
              <router-link class="btn btn-secondary" :to="'/equipos/'+idEquipo+'/jugadores'">Volver</router-link>
            </div>
        </div>
    </div>
    <div class="col-6 text-center" v-else>
        <h1>Loading...</h1>
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="">
    </div>
</div>
</template>

<script>
import JugadoresService from '../../services/JugadoresService'

const service = new JugadoresService();

export default {
    name: "DetallesJugador",
    data() {
        return {
            idEquipo: 0,
            idJugador: 0,
            jugador: {}
        }
    },
    methods: {
        cargarJugador() {
            service.getJugadorById(this.idJugador).then(result => {
                this.jugador = result;
            });
        }
    },
    mounted() {
        this.idEquipo = this.$route.params.idEquipo;
        this.idJugador = this.$route.params.idJugador;
        this.cargarJugador();
    }
}
</script>

<style>

</style>