import Global from "@/Global"
import axios from "axios"


export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function (resolve) {
            let empleados = []
            let request = "api/empleados"
            axios.get(Global.urlEmpleados + request).then(response => {
                empleados = response.data
                resolve(empleados)
            })
        })


    }

    findEmpleado(idEmpleado) {
        return new Promise(function (resolve) {
            let empleado = {};
            let request = "api/empleados/" + idEmpleado
            axios.get(Global.urlEmpleados + request).then(response => {
                empleado = response.data
                resolve(empleado)
            })
        })
    }
    getOficios() {
        return new Promise(function (resolve) {
            let oficios = []
            let request = "api/empleados/oficios"
            axios.get(Global.urlEmpleados + request).then(response => {
                oficios = response.data;
                resolve(oficios)
            })
        })
    }
    getEmpleadosOficio(oficio) {
        return new Promise(function (resolve) {
            let empleados = []
            let request = "api/empleados/empleadosoficio/" + oficio
            axios.get(Global.urlEmpleados + request).then(response => {
                empleados = response.data;
                resolve(empleados)
            })
        })
    }
}