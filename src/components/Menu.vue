<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="'/'">CHAMPIONS</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" :to="'/home'">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/apuestas'">Apuestas</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="(equipo, index) in equipos" :key="index">
              <router-link class="nav-link" :to="'/equipos/' + equipo.idEquipo">{{equipo.nombre}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" v-on:submit.prevent="buscarJugadores">
          <input class="form-control me-2" type="search" placeholder="Buscar jugador" aria-label="Search" v-model="busqueda">
          <button class="btn btn-outline-primary" type="submit">Buscar</button>
        </form>
    </div>
  </div>
</nav>
</template>

<script>
import EquiposService from '../services/EquiposService'

const service = new EquiposService();

export default {
    name: "Menu",
    data() {
        return {
          equipos: [],
          busqueda: ""
        }
    },
    methods: {
      cargarEquipos() {
        service.getEquipos().then(result => {
          this.equipos = result;
        });
      },
      buscarJugadores() {
        if (this.busqueda != "") {
          this.$router.push("/buscarjugadores/"+this.busqueda);
        }
      }
    },
    mounted() {
      this.cargarEquipos();
    }
}
</script>

<style>

</style>