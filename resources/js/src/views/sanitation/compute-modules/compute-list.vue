<template>
  <div>
    <h2 class="style-title">Compute Modules</h2>
    <p>To access API, use route: https://dashboard.oneblinktech.com/api/compute_module/</p>
    <p>&nbsp;</p>
    <vs-button color="primary" type="filled" to="/compute-modules/add" style="margin-bottom:20px;">Add module</vs-button>
      <vs-table
          pagination
          max-items="12"
          stripe
          search
          v-model="data"
          :data="data">

      <template slot="thead">
        <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="description">IP Address</vs-th>
        <vs-th>API Token</vs-th>
        <vs-th>Options</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr v-for="item in data" v-bind:key="item.id">
          <vs-td>{{item.name}}</vs-td>
          <vs-td>{{item.description}}</vs-td>
          <vs-td>{{item.user.api_token}}</vs-td>
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
        this.$axios.get('/api/admin/compute_modules', {params:{api_token:token}}).then((res) =>{
            this.data = res.data
            console.log(this.data);
        }).catch((err) => {
            console.log(err);
        })
    },
    edit(id){
        this.$router.push({name:'edit_compute', params: {id}})
    },
    openPopup(id){
        this.id = id
        this.popupActive = true
    },
    deleteDevice() {
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        let url = '/api/admin/compute_module/delete/' + this.id
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
