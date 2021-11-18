import axios from "axios";
import Global from "../components/Global";

export default class ApuestasService {
    
    getApuestas() {
        return new Promise(function(resolve) {
            var request = "api/apuestas";
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        })
    }

    postApuesta(apuesta) {
        return new Promise(function(resolve) {
            var request = "api/apuestas";
            var url = Global.url + request;
            axios.post(url, apuesta).then(() => {
                resolve(true);
            });
        })
    }

    deleteApuesta(idApuesta) {
        return new Promise(function(resolve) {
            var request = "api/apuestas/" + idApuesta;
            var url = Global.url + request;
            axios.delete(url).then(() => {
                resolve(true);
            });
        })
    }
    
}