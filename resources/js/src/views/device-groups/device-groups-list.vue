<template>
  <div>
    <h2 class="style-title">Device Groups</h2>
    <vs-button color="primary" type="filled" to="/device_groups/add" style="margin-bottom:20px;">Add device group</vs-button>
    <vs-table data="users">

      <template slot="thead">
        <vs-th>Enabled</vs-th>
        <vs-th>Type</vs-th>
        <vs-th>Name</vs-th>
        <vs-th>Trigger duration</vs-th>
        <vs-th>Time between trigger</vs-th>
        <vs-th>Options</vs-th>
      </template>

      <template>
        <vs-tr v-for="item in data" v-bind:key="item.id">
          <vs-td>{{item.enabled ? 'True' : 'False'}}</vs-td>
  				<vs-td>{{item.type}}</vs-td>
  				<vs-td>{{item.name}}</vs-td>
          <vs-td>{{item.trigger_duration_ms}} ms</vs-td>
          <vs-td>{{item.time_between_trigger}} ms</vs-td>
          <vs-td><vs-button v-on:click="edit(item.id)" class="mr-3 mb-2">Edit</vs-button><vs-button color="danger" @click="openPopup(item.id)"  class="mr-3 mb-2">Delete</vs-button></vs-td>
        </vs-tr>
      </template>

    </vs-table>
    <vs-popup class="holamundo"  title="Are you sure you want to delete this device group" :active.sync="popupActive">
      <vs-button color="danger" v-on:click="deleteDeviceGroup" class="mr-3 mb-2">Yes</vs-button>
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
        data:[]
      }
    },
    methods:{
      getData(){
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        axios.get('/api/admin/device_groups', {params:{api_token:token}}).then((res) =>{
          this.data = res.data
        }).catch((err) => {
          console.log(err);
        })
      },
      edit(id){
        window.location.href = "/app/device_groups/edit/" + id
      },
      openPopup(id){
        this.id = id
        this.popupActive = true
      },
      deleteDeviceGroup(){
        let user = JSON.parse(localStorage.user)
  			let token = user.api_token
  			let url = '/api/admin/device_group/delete/' + this.id
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
