<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.name.length < 3" style="margin-bottom:20px;">
  		Device name must me longer that three letters!
		</vs-alert>
		<vs-alert color="success" v-if="alert" style="margin-bottom:20px;">
  		{{alert}}
		</vs-alert>
		<h2 class="style-title">Edit device</h2>
		<div class="vx-row mb-6">
			<div class="vx-col w-full">
				<vs-select
					class="w-full"
					label="Device group"
					v-model="data.device_group_id"
					>
					<vs-select-item key="1" value="1" text="1"/>
					<vs-select-item key="2" value="2" text="2"/>
				</vs-select>
			</div>
		</div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.name" class="w-full" type="text" label="Device name" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.description" class="w-full" type="text" label="Description" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_rfid" class="w-full" type="text" label="RFID" />
	    </div>
	  </div>
	  <div class="vx-row">
	    <div class="vx-col w-full">
	      <vs-button v-on:click="postRequest" class="mr-3 mb-2" v-if="data.name.length >= 3">Save</vs-button>
				<vs-button to="/devices" class="mr-3 mb-2" color="danger">Cancel</vs-button>
	    </div>
	  </div>
	</div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      data:{
				name:''
			},
			alert:''
    }
  },
	methods: {
    getData(){
			let user = JSON.parse(localStorage.user)
			let token = user.api_token
      axios.get('/api/admin/device/' + this.$route.params.id, {params:{'api_token':token}})
			.then((res) =>{
        this.data = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
		postRequest(){
			let user = JSON.parse(localStorage.user)
			let token = user.api_token
			let url = '/api/admin/device/update/' + this.$route.params.id
			axios({
				method: 'PUT',
                url: url,
                data: this.data,
								params: {
									'api_token': token
								},
			})
			.then((res) =>{
				this.alert = 'Device successfully updated'
			}).catch((err) => {
				this.alert = 'Device failed to updates'
				console.log(err);
			})
		}
	},
  beforeMount(){
    this.getData()
  }
}
</script>
