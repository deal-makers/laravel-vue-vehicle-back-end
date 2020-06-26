<template>
    <div class="max-width-500">
        <vs-alert color="danger" v-if="data.name.length < 3 && data.name !== ''" style="margin-bottom:20px;">
            Device name must me longer that three letters!
        </vs-alert>
        <vs-alert color="success" v-if="alert" style="margin-bottom:20px;">
            {{alert}}
        </vs-alert>
        <vs-alert color="danger" v-if="errors !== null">
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
                <vs-select class="w-full" label="Device group" v-model="data.device_group_id">
                    <vs-select-item v-for="device_group in device_groups" :key="device_group.id"
                                    :value="device_group.id" :text="device_group.name"/>
                </vs-select>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.name" class="w-full" type="text" label="Device name"/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device_id" class="w-full" type="text" label="Device ID"/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.description" class="w-full" type="text" label="Description"/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
                <vs-input class="w-full" v-model="data.auth_code" type="text" label="Auth Code"
                          disabled="true"/>
            </div>
            <div class="vx-col w-1/2">
                <vs-button v-on:click="generateAuthCode" class="w-full mt-6">Generate Auth Code</vs-button>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-select class="w-full" label="Role" v-model="data.role_id">
                    <vs-select-item v-for="role in roles" :key="role.id" :value="role.id" :text="role.name"/>
                </vs-select>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full" style="display: inline-flex;">
                <vs-switch v-model="data.active"/>
                <p style="margin-left: 10px;">Active</p>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button v-on:click="postRequest" class="mr-3 mb-2">Save</vs-button>
                <vs-button :to="{name:'remote_devices'}" class="mr-3 mb-2" color="danger">Cancel</vs-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                data: {
                    device_group_id: '',
                    name: '',
                    device_id: '',
                    description: '',
                    auth_code: '',
                    role_id: '',
                    active: false
                },
                device_groups: [],
                roles: [],
                alert: '',
                errors: null,
            }
        },
        computed: {
            token() {
                return JSON.parse(localStorage.user).api_token
            }
        },
        methods: {
            generateAuthCode() {
                if (confirm("Do you really want to generate new Auth Code?")) {
                    this.data.auth_code = Math.random().toString(36).substring(2)
                }
            },
            getDeviceGroups() {
                this.$axios.get('/api/admin/device_groups', {params: {'api_token': this.token}})
                    .then((res) => {
                        this.device_groups = res.data;
                    })
            },
            getRoles() {
                this.$axios.get('/api/admin/roles', {params: {'api_token': this.token}})
                    .then((res) => {
                        this.roles = res.data;
                    })
            },
            getData() {
                this.$axios.get('/api/admin/remote_devices/' + this.$route.params.id, {params: {api_token: this.token}})
                    .then((res) => {
                        this.data = res.data
                    })
                    .catch(console.log)
            },
            postRequest() {
                this.$axios
                    .put('/api/admin/remote_devices/' + this.$route.params.id,
                        this.data,
                        {params: {'api_token': this.token}}
                    )
                    .then(() => {
                        this.errors = null
                        this.alert = 'Device successfully updated'
                        setTimeout(() => this.$router.push({name:'remote_devices'}), 1000)
                    })
                    .catch((err) => {
                        this.errors = err.response.data.errors
                    })
            }
        },
        beforeMount() {
            this.getDeviceGroups()
            this.getRoles()
            this.getData()
        }
    }
</script>
