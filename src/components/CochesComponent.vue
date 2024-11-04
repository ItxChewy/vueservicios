<template>
  <div>
    <h1>Coches</h1>
    <div v-for="car in coches" :key="car">
        <h3 style="color:royalblue">
            {{car.marca}} {{car.modelo}}
        </h3>
        <p>
            Conductor: {{car.conductor}}
        </p>
        <img :src="car.imagen" style="width:150px"/>
    </div>
  </div>
</template>

<script>
import ServiceCoche from '../services/ServiceCoches'
const service = new ServiceCoche()
export default {
  name: "CochesComponent",
  data(){
    return{
        coches:[]
    }
  },
  mounted(){
    service.getCoches.then(result=>{
      this.coches = result
    })

  }
};
</script>

<style>
</style>