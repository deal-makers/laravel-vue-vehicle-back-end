<template>
	<div class="max-width-500">
		<h2 class="style-title">New device</h2>
		<div class="vx-row mb-6">
			<div class="vx-col w-full">
				<vs-select
					class="w-full"
					label="Device group"
					v-model="group"
					>
					<vs-select-item key="1" value="1" text="1"/>
					<vs-select-item key="2" value="2" text="2"/>
				</vs-select>
			</div>
		</div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="name" class="w-full" type="text" label="Device name" />
	    </div>
	  </div>
	  <div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="description" class="w-full" type="text" label="Description" />
	    </div>
	  </div>
		<div class="vx-row mb-6">
	    <div class="vx-col w-full">
	      <vs-input v-model="rfid" class="w-full" type="text" label="RFID" />
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
			group:"",
			name:"",
			description:"",
			rfid:""
    }
  },
	methods: {
		postRequest(){
			axios.post('/api/admin/test', {
				name:this.name
			}).then((res) =>{
				console.log(res);
			}).catch((err) => {
				this.alert = true
				console.log(err);
			})
		}
	}
}
</script>
