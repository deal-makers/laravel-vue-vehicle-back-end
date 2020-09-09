<template>
  <div>
    <h2 class="style-title">Vehicle Tags</h2>
    <p>Vehicles inherit their options from the Vehicle Group they belong to.</p>
    <p>&nbsp;</p>
    <vs-button color="primary" type="filled" to="/vehicles/add" style="margin-bottom:20px;">Add vehicle tag</vs-button>
    <vs-table data="users">

      <template slot="thead">
        <vs-th>Name</vs-th>
        <vs-th>Group</vs-th>
        <vs-th>Description</vs-th>
        <vs-th>Options</vs-th>
      </template>

      <template>
        <vs-tr v-for="item in data" v-bind:key="item.id">
          <vs-td data="item.name">{{item.name}}</vs-td>
          <vs-td>{{item.device_group.name}}</vs-td>
          <vs-td>{{item.description}}</vs-td>
          <vs-td><vs-button v-on:click="edit(item.id)" class="mr-3 mb-2">Edit</vs-button><vs-button color="danger" @click="openPopup(item.id)"  class="mr-3 mb-2">Delete</vs-button></vs-td>
        </vs-tr>
      </template>

    </vs-table>
    <vs-popup class="holamundo"  title="Are you sure you want to delete this vehicle" :active.sync="popupActive">
      <vs-button color="danger" v-on:click="deleteDevice" class="mr-3 mb-2">Yes</vs-button>
      <vs-button @click="popupActive=false"  class="mr-3 mb-2">No</vs-button>
    </vs-popup>
  </div>
</template>
<script>

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
        this.$axios.get('/api/admin/vehicles', {params:{api_token:token}}).then((res) =>{
            this.data = res.data
        }).catch((err) => {
            console.log(err);
        })
    },
    edit(id){
        this.$router.push({name:'edit_vehicle', params: {id}})
    },
    openPopup(id){
        this.id = id
        this.popupActive = true
    },
    deleteDevice() {
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        let url = '/api/admin/vehicle/delete/' + this.id
        this.$axios({
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
