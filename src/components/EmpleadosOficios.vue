<template>
  <div style="padding:5%">
    <h1>Empleados Oficios</h1>
    <table class="table table-bordered table-light table-striped">
        <thead>
            <tr>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados" :key="empleado">
                <td>{{empleado.apellido}}</td>
                <td>{{empleado.oficio}}</td>
                <td>{{empleado.salario}}</td>
                <td>{{empleado.departamento}}</td>

            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados'
const service = new ServiceEmpleados()
export default {
  name: "EmpkleadosOficios",
  props: ["oficio"],
  data(){
    return{
        empleados:[]
    }
  },
  mounted() {
    this.loadEmpleados()
  },
  watch: {
    '$route.params.oficio'(nextVal, oldVal){
        if(nextVal != oldVal){
            this.loadEmpleados()
        }
    }
  },
  methods: {
    loadEmpleados(){
      let oficio = this.$route.params.oficio
        service.getEmpleadosOficio(oficio).then(result =>{
          this.empleados = result
        })
    }
  },
};
</script>

<style>
</style>