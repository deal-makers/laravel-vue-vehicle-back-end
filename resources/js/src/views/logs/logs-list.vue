<template>
  <div>
    <h2 class="style-title">Devices</h2>
    <div class="logs-search w-full">
      <p>Date from:</p>
      <datepicker v-model="search_params.date_from" class="logs-search-items" style="z-index:1000"></datepicker>
      <p>To:</p>
      <datepicker v-model="search_params.date_to" class="logs-search-items" style="z-index:1000"></datepicker>
      <p>Device group:</p>
      <vs-select
        v-model="search_params.device_group_id" class="logs-search-items"
        >
        <vs-select-item key="1" value="1" text="1"/>
        <vs-select-item key="2" value="2" text="2"/>
      </vs-select>
      <vs-button v-on:click="search" class="mr-3 mb-2 search-button">Search</vs-button>
    </div>
    <vs-table data="users">
      <template slot="thead">
        <vs-th>ID</vs-th>
        <vs-th>Device group ID</vs-th>
        <vs-th>Device ID</vs-th>
        <vs-th>Description</vs-th>
        <vs-th>Reported by</vs-th>
        <vs-th>Reported at</vs-th>
      </template>

      <template>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
        <vs-tr>
          <vs-td>234</vs-td>
  				<vs-td>324</vs-td>
  				<vs-td>546</vs-td>
          <vs-td>dfdfsdfds</vs-td>
          <vs-td>Ivan</vs-td>
          <vs-td>12:24</vs-td>
        </vs-tr>
      </template>

    </vs-table>
  </div>
</template>
<script>

import axios from 'axios'
import Datepicker from 'vuejs-datepicker';

export default {
  data(){
    return {
      id:'',
      data:[],
      search_params:{
        date_from:'',
        date_to:'',
        device_group_id:''
      }
    }
  },
  components: {
    Datepicker
  },
    methods:{
        search(){
            let user = JSON.parse(localStorage.user)
            let token = user.api_token
            axios.get('/api/admin/logs', {params:{
                api_token:token,
                date_from: this.search_params.date_from,
                date_to: this.search_params.date_to,
                device_group_id: this.search_params.device_group_id}})
                .then((res) =>{
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
        },
    },
    beforeMount(){
        this.search()
    }
}
</script>
