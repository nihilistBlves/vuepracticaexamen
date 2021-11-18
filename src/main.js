import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import VerApuestas from './components/Apuestas/VerApuestas.vue'
import CrearApuesta from './components/Apuestas/CrearApuesta.vue'
import DetallesEquipo from './components/Equipos/DetallesEquipo.vue'
import VerJugadoresEquipo from './components/Jugadores/VerJugadoresEquipo.vue'
import DetallesJugador from './components/Jugadores/DetallesJugador.vue'
import BuscarJugadores from './components/Jugadores/BuscarJugadores.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/apuestas/nueva", component: CrearApuesta},
  {path: "/apuestas", component: VerApuestas},
  {path: "/equipos/:idEquipo", component: DetallesEquipo},
  {path: "/equipos/:idEquipo/jugadores", component: VerJugadoresEquipo},
  {path: "/equipos/:idEquipo/jugadores/:idJugador", component: DetallesJugador},
  {path: "/buscarjugadores/:busqueda", component: BuscarJugadores},
  {path: "/home", component: Home},
  {path: "/", component: Home},
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
