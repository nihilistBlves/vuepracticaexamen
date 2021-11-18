import axios from 'axios';
import Global from '../components/Global'

export default class EquiposService {
    getEquipos() {
        return new Promise(function(resolve) {
            var request = "api/equipos";
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getEquipoById(idEquipo) {
        return new Promise(function(resolve) {
            var request = "api/equipos/" + idEquipo;
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }
}