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
import axios from "axios";
import Global from "../Global";
export default {
  name: "CochesComponent",
  data(){
    return{
        coches:[]
    }
  },
  mounted(){
    let request ="webresources/coches"
    axios.get(Global.urlApiCoches + request).then(response =>{
        this.coches = response.data
    })
  }
};
</script>

<style>
</style>