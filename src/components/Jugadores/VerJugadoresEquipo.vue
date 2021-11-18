<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-6 text-center">
        <h1>Jugadores del {{equipo.nombre}}</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(jug, index) of jugadores" :key="index">
                    <td>{{jug.nombre}}</td>
                    <td><img v-bind:src="jug.imagen" height="100px"></td>
                    <td><router-link class="btn btn-outline-primary" :to="'/equipos/'+jug.idEquipo+'/jugadores/'+jug.idJugador">Ver detalles</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import JugadoresService from '../../services/JugadoresService'
import EquiposService from '../../services/EquiposService'


const serviceJugadores = new JugadoresService();
const serviceEquipos = new EquiposService();

export default {
    name: "VerJugadoresEquipo",
    data() {
        return {
            idEquipo: 0,
            equipo: {},
            jugadores: []
        }
    },
    methods: {
        cargarEquipo() {
            serviceEquipos.getEquipoById(this.idEquipo).then(result => {
                this.equipo = result;
            });
        },
        cargarJugadores() {
            serviceJugadores.getJugadoresByEquipo(this.idEquipo).then(result => {
                this.jugadores = result;
            });
        }
    },
    mounted() {
        this.idEquipo = this.$route.params.idEquipo;
        this.cargarEquipo();
        this.cargarJugadores();
    }
}
</script>

<style>

</style>