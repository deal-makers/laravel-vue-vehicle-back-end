<template>
  <div>
    <h2 class="style-title">Device Status</h2>
      <vs-table data="users">

          <template slot="thead">
              <vs-th>&nbsp;</vs-th>
              <vs-th>Name</vs-th>
              <vs-th>Device Group</vs-th>
              <vs-th>Last Seen</vs-th>
          </template>

          <template>
              <vs-tr v-for="item in data" v-bind:key="item.id">
                  <vs-td><zap-icon class="text-red " style="color: green;" /></vs-td>
                  <vs-td>{{item.name}}</vs-td>
                  <vs-td>{{item.device_group.name}}</vs-td>
                  <vs-td>Sep 9, 2020 10:14 AM</vs-td>
              </vs-tr>
          </template>

      </vs-table>
  </div>
</template>
<script>
import { ZapIcon } from 'vue-feather-icons'
export default {
data(){
    return {
        popupActive:false,
        id:'',
        data:[]
    }
},
components: {
    ZapIcon
},
methods:{
    getData(){
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        this.$axios.get('/api/admin/reports/status', {params:{api_token:token}}).then((res) =>{
            this.data = res.data
        }).catch((err) => {
            console.log(err);
        })
    },
},
    beforeMount(){
        this.getData()
    },
}
</script>
