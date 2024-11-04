import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches {

    getCoches = new Promise(function (resolve) {
        let coches = [];
        let request = "webresources/coches"
        axios.get(Global.urlApiCoches + request).then(response => {
            coches = response.data
            resolve(coches)
            //console.log(coches)
        })
    })

}