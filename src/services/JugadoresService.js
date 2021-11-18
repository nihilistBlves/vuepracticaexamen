import axios from "axios";
import Global from "../components/Global";

export default class JugadoresService {

    getJugadoresByEquipo(idEquipo) {
        return new Promise(function(resolve) {
            var request = "api/jugadores/jugadoresequipo/" + idEquipo;
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }
    
    getJugadorById(idJugador) {
        return new Promise(function(resolve) {
            var request = "api/jugadores/" + idJugador;
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getJugadoresByQuery(busqueda) {
        return new Promise(function(resolve) {
            var request = "api/Jugadores/BuscarJugadores/" + busqueda;
            var url = Global.url2 + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }
}