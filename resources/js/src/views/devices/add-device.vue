<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.device.name.length < 3" style="margin-bottom:20px;">
  		Device name must me longer that three letters!
		</vs-alert>
		<h2 class="style-title">New device</h2>
		<div class="vx-row mb-6">
			<div class="vx-col w-full">
				<vs-select
					class="w-full"
					label="Device group"
					v-model="data.device.device_group_id"
					>
					<vs-select-item key="1" value="1" text="1"/>
					<vs-select-item key="2" value="2" text="2"/>
				</vs-select>
			</div>
		</div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device.name" class="w-full" type="text" label="Device name" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device.description" class="w-full" type="text" label="Description" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device.device_rfid" class="w-full" type="text" label="RFID" />
	    </div>
	  </div>
	  <div class="vx-row">
	    <div class="vx-col w-full">
	      <vs-button v-on:click="postRequest" class="mr-3 mb-2" v-if="data.device.name.length >= 3">Save</vs-button>
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
				device:{
					name:''
				}
			}
    }
  },
	methods: {
		postRequest(){
				let user = JSON.parse(localStorage.user)
				let token = user.api_token
				axios({
					method: 'POST',
					url: '/api/admin/device/store',
					data: this.data.device,
					params: {
						'api_token': token
					},
				})
				.then((res) =>{
					window.location.href = "/app/devices"
				}).catch((err) => {
					console.log(err);
				})
		}
	}
}
</script>
