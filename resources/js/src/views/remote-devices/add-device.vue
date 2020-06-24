<template>
    <div class="max-width-500">
        <vs-alert color="danger" v-if="data.device.name !== '' && data.device.name.length < 3"
                  style="margin-bottom:20px;">
            Device name must me longer than three letters!
        </vs-alert>
        <vs-alert color="danger" v-if="errors !== null">
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
                <vs-select class="w-full" label="Device group" v-model="data.device.device_group_id">
                    <vs-select-item v-for="device_group in data.device_groups" :key="device_group.id"
                                    :value="device_group.id" :text="device_group.name"/>
                </vs-select>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.name" class="w-full" type="text" label="Device name"/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.device_id" class="w-full" type="text" label="Device ID" required/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-input v-model="data.device.description" class="w-full" type="text" label="Description"/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-1/2">
                <vs-input class="w-full" v-model="data.device.auth_code" type="text" label="Auth Code"
                          disabled="true"/>
            </div>
            <div class="vx-col w-1/2">
                <vs-button v-on:click="generateAuthCode" class="w-full mt-6">Generate Auth Code</vs-button>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-select class="w-full" label="Role" v-model="data.device.role_id">
                    <vs-select-item v-for="role in data.roles" :key="role.id" :value="role.id" :text="role.name"/>
                </vs-select>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                <vs-checkbox color="success" v-model="data.device.active">Active</vs-checkbox>
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

    import axios from 'axios'

    export default {
        data() {
            return {
                data: {
                    device: {
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
                },
                errors: null
            }
        },
        computed: {
            token() {
                return JSON.parse(localStorage.user).api_token
            }
        },
        methods: {
            generateAuthCode() {
                this.data.device.auth_code = Math.random().toString(36).substring(2)
            },
            getDeviceGroups() {
                axios.get('/api/admin/device_groups', {params: {'api_token': this.token}})
                    .then((res) => {
                        this.data.device_groups = res.data;
                    })
            },
            getRoles() {
                axios.get('/api/admin/roles', {params: {'api_token': this.token}})
                    .then((res) => {
                        this.data.roles = res.data;
                    })
            },
            postRequest() {
                axios.post('/api/admin/remote_devices', this.data.device, {params: {'api_token': this.token}})
                    .then(() => {
                        this.$router.push({name: 'remote_devices'})
                    })
                    .catch((err) => {
                        this.errors = err.response.data.errors
                    })
            }
        },
        beforeMount() {
            this.getDeviceGroups();
            this.getRoles();
        }
    }
</script>
