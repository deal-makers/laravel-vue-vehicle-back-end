<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.device_group.name.length < 3" style="margin-bottom:20px;">
  		Vehicle name must me longer that three letters
		</vs-alert>
		<h2 class="style-title">New vehicle group</h2>
	  <div class="vx-row mb-6">
			<div class="vx-col w-full" style="display: inline-flex;">
	      <vs-switch v-model="data.device_group.enabled"/>
				<p style="margin-left: 10px;">Enabled</p>
			</div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.name" class="w-full" type="text" label="Name" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.device_group.trigger_duration_seconds" class="w-full" type="number" label="Trigger duration seconds" />
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
				<vs-button to="/vehicles" class="mr-3 mb-2" color="danger">Cancel</vs-button>
	    </div>
	  </div>
	</div>
</template>

<script>

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
				this.$axios({
					method: 'POST',
					url: '/api/admin/vehicle_group/store',
					data: this.data.device_group,
					params: {
						'api_token': token
					},
				})
				.then((res) =>{
                    setTimeout(function() {
                        window.location.href = "/app/vehicle-groups";
                    }, 750);
				}).catch((err) => {
					console.log(err);
				})
		}
	}
}
</script>
