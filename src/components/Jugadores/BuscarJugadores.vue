<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-6 text-center">
        <h1>Busqueda de jugadores</h1>
        <table class="table table-striped" v-if="jugadores">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(jug, index) in jugadores" :key="index">
                    <td>{{jug.nombre}}</td>
                    <td><img v-bind:src="jug.imagen" height="100px"></td>
                    <td><router-link class="btn btn-success" :to="'/equipos/'+jug.idEquipo+'/jugadores/'+jug.idJugador">Ver detalles</router-link></td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <h2>Loading...</h2>
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="">
        </div>
    </div>
</div>
</template>

<script>
import JugadoresService from '../../services/JugadoresService'

const service = new JugadoresService();

export default {
    name: "BuscarJugadores",
    data() {
        return {
            busqueda: "",
            jugadores: []
        }
    },
    methods: {
        cargarJugadores() {
            service.getJugadoresByQuery(this.busqueda).then(result => {
                this.jugadores = result;
            });
        }
    },
    mounted() {
        this.busqueda = this.$route.params.busqueda;
        this.cargarJugadores();
    },
    updated() {
    },
    watch: {
        '$route.params.busqueda'(next, prev) {
            if (next != prev) {
                this.busqueda = this.$route.params.busqueda;
                this.cargarJugadores();
            }
        }
    }
}
</script>

<style>

</style>