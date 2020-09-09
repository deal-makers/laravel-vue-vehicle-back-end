<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.name.length < 3 && data.name !== ''" style="margin-bottom:20px;">
  		    Vehicle name must be longer that two characters.
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
		<h2 class="style-title">Edit vehicle tag</h2>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-select
                    v-model="data.device_group_id"
                    name="data.device_group_id"
                    class="w-full"
                    label="Vehicle group"
                    @input="setSelected"
                >
                    <vs-select-item :key="0" :value="''" :disabled="true" v-show="false"/>
                    <vs-select-item
                        v-for="device_group in device_groups"
                        :key="device_group.id"
                        :value="device_group.id"
                        :text="device_group.name"
                    />
                </vs-select>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.name" class="w-full" type="text" label="Vehicle identifier" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.description" class="w-full" type="text" label="EPC" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button v-on:click="postRequest" class="mr-3 mb-2">Save</vs-button>
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
                name: '',
                device_group_id: '',
                description: '',
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
                url: '/api/admin/vehicle_groups',
                params: {
                    'api_token': token
                }
            }).then((res) => {
                this.device_groups = res.data
                console.log(this.device_groups);
            }).catch((err) => {
                console.log(err)
            })
        },
        getData(){
            let user = JSON.parse(localStorage.user)
            let token = user.api_token
            this.$axios
                .get('/api/admin/vehicle/' + this.$route.params.id, {params:{'api_token':token}})
                .then((res) => {
                    this.data = res.data;
                }).catch((err) => {
                    this.errors = err
                })
        },
        setSelected(value) {
            this.data.device_group_id = value;
        },
		postRequest(){
			let user = JSON.parse(localStorage.user)
			let token = user.api_token
			let url = '/api/admin/vehicle/update/' + this.$route.params.id
			this.$axios({
				method: 'PUT',
                url: url,
                data: this.data,
                params: {
                    'api_token': token
                },
			})
			.then((res) =>{
                this.alert = 'Vehicle successfully updated'
                setTimeout(function() {
                    window.location.href = "/app/vehicles";
                }, 750);
			}).catch((err) => {
                this.errors = null
                this.errors = err.response.data
			})
		}
	},
    beforeMount(){
        this.getDeviceGroups();
        this.getData();
    }
}
</script>
