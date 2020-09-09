<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.device.name !== '' && data.device.name.length < 3" style="margin-bottom:20px;">
  		    Vehicle name must me longer that two letters!
		</vs-alert>
        <vs-alert color="danger"  v-if="errors !== null">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">
                    - {{ error[0] }}
                </li>
            </ul>
        </vs-alert>
		<h2 class="style-title">New device</h2>
		<div class="vx-row mb-6">
			<div class="vx-col w-full">
				<vs-select
                    v-model="data.device.device_group_id"
                    name="device_group_id"
					class="w-full"
					label="Device group"
					>
                    <vs-select-item :key="0" :value="''" :disabled="true" v-show="false"/>
					<vs-select-item v-for="device_group in data.device_groups" :key="device_group.id" :value="data.device.device_group_id" :text="device_group.name"/>
				</vs-select>
			</div>
		</div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.name" class="w-full" type="text" label="Vehicle identifier" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.description" class="w-full" type="text" label="EPC" />
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

export default {
    data(){
        return {
            data:{
                device: {
                    device_group_id: '',
                    name: '',
                    description: '',
                },
                device_groups: []
            },
            errors: null
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
            })
            .then((res) => {
                this.data.device_groups = res.data;
            })
        },
        postRequest(){
            console.log(this.data.device);
            let user = JSON.parse(localStorage.user);
            let token = user.api_token;
            this.$axios({
                method: 'POST',
                url: '/api/admin/vehicle/store',
                data: this.data.device,
                params: {
                    'api_token': token
                },
            })
            .then((res) =>{
                //window.location.href = "/app/vehicles"
            }).catch((err) => {
                this.errors = err.response.data
            })
        }
    },
    beforeMount() {
        this.getDeviceGroups();
    }
}
</script>
