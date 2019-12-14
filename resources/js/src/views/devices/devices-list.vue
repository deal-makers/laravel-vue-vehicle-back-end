<template>
  <div>
    <h2 class="style-title">Devices</h2>
    <vs-button color="primary" type="filled" to="/devices/add" style="margin-bottom:20px;">Add device</vs-button>
    <vs-table data="users">

      <template slot="thead">
        <vs-th>Tehnologija</vs-th>
        <vs-th>Naziv</vs-th>
        <vs-th>Korisnički račun</vs-th>
        <vs-th>Datum</vs-th>
        <vs-th>Radnik</vs-th>
        <vs-th>Options</vs-th>
      </template>

      <template>
        <vs-tr key="indextr">
          <vs-td>4500317791</vs-td>
  				<vs-td>Verriegelungsblech RFID</vs-td>
  				<vs-td>5000524301</vs-td>
  				<vs-td>3.5.2016</vs-td>
          <vs-td>Antun Vrban</vs-td>
          <vs-td><vs-button v-on:click="edit" class="mr-3 mb-2">Edit</vs-button><vs-button color="danger" @click="popupActive=true"  class="mr-3 mb-2">Delete</vs-button></vs-td>
        </vs-tr>
        <vs-tr key="indextr2">
          <vs-td>4500317791</vs-td>
  				<vs-td>Verriegelungsblech RFID</vs-td>
  				<vs-td>5000524301</vs-td>
  				<vs-td>3.5.2016</vs-td>
          <vs-td>Antun Vrban</vs-td>
          <vs-td><vs-button v-on:click="edit" class="mr-3 mb-2">Edit</vs-button><vs-button color="danger" @click="popupActive=true"  class="mr-3 mb-2">Delete</vs-button></vs-td>
        </vs-tr>
      </template>

    </vs-table>
    <vs-popup class="holamundo"  title="Are you sure you want to delete this device" :active.sync="popupActive">
      <vs-button color="danger" v-on:click="deleteDevice" class="mr-3 mb-2">Yes</vs-button>
      <vs-button @click="popupActive=false"  class="mr-3 mb-2">No</vs-button>
    </vs-popup>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data(){
    return {
      popupActive:false,
      id:1,
    }
  },
    methods:{
      getData(){
        axios.get('/api/admin/device').then((res) =>{
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      },
      edit(){
        window.location.href = "/devices/edit"
      },
      deleteDevice(){
        axios.delete('/api/admin/test3/' + this.id).then((res) =>{
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    beforeMount(){
      this.getData()
    },
}
</script>
