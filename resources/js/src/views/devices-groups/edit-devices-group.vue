<template>
	<div class="max-width-500">
		<h2 class="style-title">Edit devices group</h2>
	  <div class="vx-row mb-6">
			<div class="vx-col w-full" style="display: inline-flex;">
	      <vs-switch v-model="switch1"/>
				<p style="margin-left: 10px;">Enabled</p>
			</div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="type" class="w-full" type="text" label="Type" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="name" class="w-full" type="text" label="Name" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="duration" class="w-full" type="number" label="Trigger duration ms" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="time_between" class="w-full" type="number" label="Time between trigger seconds" />
	    </div>
	  </div>
	  <div class="vx-row">
	    <div class="vx-col w-full">
	      <vs-button v-on:click="postRequest" class="mr-3 mb-2">Save</vs-button>
	    </div>
	  </div>
	</div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      switch1:true,
			type:"",
			name:"",
			duration:"",
			time_between:"",
      id:1,
    }
  },
	methods: {
    getData(){
      axios.get('/api/admin/device_group/' + this.id).then((res) =>{
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    },
		postRequest(){
			axios.post('/api/admin/test1', {
				name:this.name
			}).then((res) =>{
				console.log(res);
			}).catch((err) => {
				this.alert = true
				console.log(err);
			})
		}
	},
  beforeMount(){
    this.getData()
	}
}
</script>
