<template>
	<div class="max-width-500">
		<vs-alert color="danger" v-if="data.device.name !== '' && data.device.name.length < 3" style="margin-bottom:20px;">
  		    Name must me longer that three letters!
		</vs-alert>
        <vs-alert color="danger"  v-if="errors !== null">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">
                    - {{ error[0] }}
                </li>
            </ul>
        </vs-alert>
		<h2 class="style-title">New Compute Module</h2>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.name" class="w-full" type="text" label="Device name" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.description" class="w-full" type="text" label="IP Address" />
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
                device: {
                    name: '',
                    description: '',
                }
            },
            errors: null
        }
    },
    methods: {
        postRequest(){
            let user = JSON.parse(localStorage.user)
            let token = user.api_token
            this.$axios({
                method: 'POST',
                url: '/api/admin/compute_module/store',
                data: this.data.device,
                params: {
                    'api_token': token
                },
            })
            .then((res) =>{
                setTimeout(function() {
                    window.location.href = "/app/compute_modules";
                }, 750);
            }).catch((err) => {
                this.errors = err.response.data
            })
        }
    },
    beforeMount() {
    }
}
</script>
