<template>
  <div style="padding: 5%">
    <h1>EMPLEADOS</h1>
    <form class="form" v-on:submit.prevent="buscarEmpleado()">
      <label class="form-label">Selecciona Empleado</label>
      <select class="form-select" v-model="idEmpleado">
        <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">
          {{ empleado.apellido }}
        </option>
      </select><br>
      <button class="btn btn-sm btn-info">Detalle empleado</button>
    </form>
    <br>
    <hr>
    <div class="mb-3" v-if="empleado">
      <h1 style="color:royalblue">{{empleado.apellido}}</h1>
      <h4>{{empleado.oficio}}</h4>
      <h4>Salario: {{empleado.salario}}</h4>
      <h4>Departamento: {{empleado.departamento}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";
export default {
  name: "EmpleadosDetalle",
  data() {
    return {
      empleados: [],
      idEmpleado:0,
      empleado:null
    };
  },
  mounted() {
    let request = "api/empleados";
    axios.get(Global.urlEmpleados + request).then((response) => {
      this.empleados = response.data;
    });
  },
  methods: {
    buscarEmpleado(){
      let request = "api/empleados/" + this.idEmpleado
      axios.get(Global.urlEmpleados + request).then(response =>{
        this.empleado = response.data
      })
    }
  },
};
</script>

<style>
</style>