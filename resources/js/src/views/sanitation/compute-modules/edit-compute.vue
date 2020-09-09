<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.name.length < 3 && data.name !== ''" style="margin-bottom:20px;">
  		    Name must me longer that three letters!
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
		<h2 class="style-title">Edit compute module</h2>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.name" class="w-full" type="text" label="Name" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.description" class="w-full" type="text" label="IP Address" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col">
                <p>Warning! Changing this will break current connections.</p>
                <vs-checkbox v-model="data.refresh_api_key">Refresh API Key</vs-checkbox>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button v-on:click="postRequest" class="mr-3 mb-2">Save</vs-button>
                <vs-button to="/compute-modules" class="mr-3 mb-2" color="danger">Cancel</vs-button>
            </div>
        </div>
	</div>
</template>

<script>

export default {
    data(){
        return {
            data:{
                name: '',
                refresh_api_key: '',
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

            this.$axios({
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

            if(confirm("Do you really want to generate new API token?")) {
                this.$axios({
                    method: 'POST',
                    url: '/api/admin/compute_module/renew_api_token',
                    params: {
                        api_token: token,
                        device_id: this.data.device_id
                    }
                }).then((res) => {
                    this.data.attrr.api_token = res.data
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        getData(){
            let user = JSON.parse(localStorage.user)
            let token = user.api_token
            this.$axios.get('/api/admin/compute_module/' + this.$route.params.id, {params:{'api_token':token}})
                .then((res) => {
                    this.data = res.data
                }).catch((err) => {
                    this.errors = err
                })
        },
		postRequest(){
			let user = JSON.parse(localStorage.user)
			let token = user.api_token
			let url = '/api/admin/compute_module/update/' + this.$route.params.id
			this.$axios({
				method: 'PUT',
                url: url,
                data: this.data,
                params: {
                    'api_token': token
                },
			})
			.then((res) =>{
				this.alert = 'Device successfully updated';
                setTimeout(function() {
                    window.location.href = "/app/compute-modules";
                }, 750);
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
