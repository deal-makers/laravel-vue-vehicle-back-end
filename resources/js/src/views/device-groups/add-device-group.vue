<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.device_group.name.length < 3" style="margin-bottom:20px;">
  		Device name must me longer that three letters!
		</vs-alert>
		<h2 class="style-title">New devices group</h2>
	  <div class="vx-row mb-6">
			<div class="vx-col w-full" style="display: inline-flex;">
	      <vs-switch v-model="data.device_group.enabled"/>
				<p style="margin-left: 10px;">Enabled</p>
			</div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.type" class="w-full" type="text" label="Type" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.name" class="w-full" type="text" label="Name" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.trigger_duration_ms" class="w-full" type="number" label="Trigger duration ms" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.time_between_trigger" class="w-full" type="number" label="Time between trigger seconds" />
	    </div>
	  </div>
	  <div class="vx-row">
	    <div class="vx-col w-full">
	      <vs-button v-on:click="postRequest" class="mr-3 mb-2" v-if="data.device_group.name.length >= 3">Save</vs-button>
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
				device_group:{
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
					url: '/api/admin/device_group/store',
					data: this.data.device_group,
					params: {
						'api_token': token
					},
				})
				.then((res) =>{
					window.location.href = "/app/devices_groups"
				}).catch((err) => {
					console.log(err);
				})
		}
	}
}
</script>
