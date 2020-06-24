<template>
  <div>
    <h2 class="style-title">Devices</h2>
    <vs-button color="primary" type="filled" to="/devices/add" style="margin-bottom:20px;">Add device</vs-button>
    <vs-table data="users">

      <template slot="thead">
        <vs-th>Name</vs-th>
        <vs-th>Description</vs-th>
        <vs-th>RFID</vs-th>
        <vs-th>Options</vs-th>
      </template>

      <template>
        <vs-tr v-for="item in data" v-bind:key="item.id">
          <vs-td>{{item.name}}</vs-td>
  				<vs-td>{{item.description}}</vs-td>
  				<vs-td>{{item.device_rfid}}</vs-td>
          <vs-td><vs-button v-on:click="edit(item.id)" class="mr-3 mb-2">Edit</vs-button><vs-button color="danger" @click="openPopup(item.id)"  class="mr-3 mb-2">Delete</vs-button></vs-td>
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
        id:'',
        data:[]
    }
},
methods:{
    getData(){
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        axios.get('/api/admin/devices', {params:{api_token:token}}).then((res) =>{
            this.data = res.data
        }).catch((err) => {
            console.log(err);
        })
    },
    edit(id){
        this.$router.push({name:'edit_device', params: {id}})
    },
    openPopup(id){
        this.id = id
        this.popupActive = true
    },
    deleteDevice() {
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        let url = '/api/admin/device/delete/' + this.id
        axios({
            method: 'DELETE',
            url: url,
            params: {
                'api_token': token
            },
        }).then((res) =>{
            this.popupActive = false
            this.getData()
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
