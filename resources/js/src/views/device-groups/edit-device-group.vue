<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.name.length < 3" style="margin-bottom:20px;">
  		Device name must me longer that three letters!
		</vs-alert>
		<vs-alert color="success" v-if="alert" style="margin-bottom:20px;">
  		{{alert}}
		</vs-alert>
		<h2 class="style-title">Edit devices group</h2>
	  <div class="vx-row mb-6">
			<div class="vx-col w-full" style="display: inline-flex;">
	      <vs-switch v-model="data.enabled"/>
				<p style="margin-left: 10px;">Enabled</p>
			</div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.type" class="w-full" type="text" label="Type" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.name" class="w-full" type="text" label="Name" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.trigger_duration_seconds" class="w-full" type="number" label="Trigger duration seconds" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="data.time_between_trigger" class="w-full" type="number" label="Time between trigger seconds" />
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
      this.$axios.get('/api/admin/device_group/' + this.$route.params.id, {params:{'api_token':token}})
			.then((res) =>{
        this.data = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
		postRequest(){
			let user = JSON.parse(localStorage.user)
			let token = user.api_token
			let url = '/api/admin/device_group/update/' + this.$route.params.id
			this.$axios({
				method: 'PUT',
                url: url,
                data: this.data,
								params: {
									'api_token': token
								},
			})
			.then((res) =>{
				this.alert = 'Device group successfully updated'
                setTimeout(function() {
                    window.location.href = "/app/device-groups";
                }, 750);
			}).catch((err) => {
				this.alert = 'Device group failed to update'
				console.log(err);
			})
		}
	},
  beforeMount(){
    this.getData()
	}
}
</script>
