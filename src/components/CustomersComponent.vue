<template>
  <div>
    <h1>Customers Component</h1>
    <form className="form" v-on:submit.prevent="buscarPorId">
      <label className="form-label">Inserte id: </label>
      <input v-model="empresa" />
      <button className='btn btn-primary'>Buscar Empresa</button>
    </form>
    <div v-if="customerPorId">
      <h3 style="color: blue">{{ customerPorId.id }}</h3>
      <h4 style="color: blue">{{ customerPorId.contactName }}</h4>
      <h4 style="color: blue">{{ customerPorId.companyName }}</h4>
      <h4 style="color: blue">{{ customerPorId.county }}</h4>
      <h4 style="color: blue">{{ customerPorId.address }}</h4>
    </div>
    <ul v-for="customer in customers" :key="customer">
      <li style="color: red">{{ customer.contactName }}</li>
      <p>Empresa: {{ customer.companyName }}</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";
export default {
  name: "CustomersComponent",
  data() {
    return {
      customers: [],
      customerPorId: [],
      empresa: null,
    };
  },
  mounted() {
    let request = "customers";
    axios.get(Global.urlCustomers + request).then((response) => {
      this.customers = response.data.results;
    });
  },
  methods: {
    buscarPorId() {
      console.log(this.empresa);
      let request = "customers/" + this.empresa;
      axios.get(Global.urlCustomers + request).then((response) => {
        this.customerPorId = response.data.customer;
        console.log(this.customerPorId);
      });
    },
  },
};
</script>

<style>
</style>