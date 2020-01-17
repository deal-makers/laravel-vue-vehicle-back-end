<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.name.length < 3 && data.name !== ''" style="margin-bottom:20px;">
  		    Device name must me longer that three letters!
		</vs-alert>
		<vs-alert color="success" v-if="alert" style="margin-bottom:20px;">
  		    {{alert}}
		</vs-alert>
        <vs-alert color="danger"  v-if="errors !== null">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">
                    - {{ error[0] }}
                </li>
            </ul>
        </vs-alert>
		<h2 class="style-title">Edit device</h2>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-select
                    class="w-full"
                    label="Device group"
                >
                    <vs-select-item v-for="device_group in device_groups" :key="device_group.id" :value="device_group.id" :text="device_group.name"/>
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
                <vs-input v-model="data.device_id" class="w-full" type="text" label="Device ID" />
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
        <div class="vx-row mb-6">
            <div class="vx-col">
                <vs-button v-on:click="generateApiToken" class="mr-3 mb-2">Generate API token</vs-button>
                <vs-input class="mr-3 mb-2" v-model="data.api_token" disabled="true"/>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button v-on:click="postRequest" class="mr-3 mb-2">Save</vs-button>
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
                name: '',
                api_token: '',
            },
            device_groups: [],
            alert:'',
            errors: null,
        }
    },
	methods: {
        getDeviceGroups() {
            let user = JSON.parse(localStorage.user)
            let token = user.api_token

            axios({
                method: 'GET',
                url: '/api/admin/device_groups',
                params: {
                    'api_token': token
                }
            }).then((res) => {
                this.device_groups = res.data
            }).catch((err) => {
                console.log(err)
            })
        },
        generateApiToken() {
            let user = JSON.parse(localStorage.user)
            let token = user.api_token

            axios({
                method: 'POST',
                url: '/api/admin/device/renew_api_token',
                params: {
                    api_token: token,
                    device_id: this.data.device_id
                }
            }).then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err)
            })
        },
        getData(){
            let user = JSON.parse(localStorage.user)
            let token = user.api_token
            axios.get('/api/admin/device/' + this.$route.params.id, {params:{'api_token':token}})
                .then((res) =>{
                    this.data = res.data
                    this.data.api_token = res.data.api_token
                }).catch((err) => {
                    this.errors = err
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
                this.errors = null
                this.errors = err.response.data
			})
		}
	},
    beforeMount(){
        this.getData()
        this.getDeviceGroups()
    }
}
</script>
