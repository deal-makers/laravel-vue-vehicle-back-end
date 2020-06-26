<template>
    <div>
        <h2 class="style-title">Remoter IoT Devices</h2>
        <vs-button color="primary" type="filled" :to="{name:'add_remote_device'}" style="margin-bottom:20px;">Add IoT
            device
        </vs-button>
        <vs-table data="users">

            <template slot="thead">
                <vs-th>Device Id</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Auth Code</vs-th>
                <vs-th>Role</vs-th>
                <vs-th>Device Group</vs-th>
                <vs-th>Active</vs-th>
                <vs-th>Options</vs-th>
            </template>

            <template>
                <vs-tr v-for="item in data" v-bind:key="item.id">
                    <vs-td>{{item.device_id}}</vs-td>
                    <vs-td>{{item.name}}</vs-td>
                    <vs-td>{{item.description}}</vs-td>
                    <vs-td>{{item.auth_code}}</vs-td>
                    <vs-td>{{item.role}}</vs-td>
                    <vs-td>{{item.device_group}}</vs-td>
                    <vs-td>{{item.active}}</vs-td>
                    <vs-td>
                        <vs-button v-on:click="edit(item.id)" class="mr-3 mb-2">Edit</vs-button>
                        <vs-button color="danger" @click="openPopup(item.id)" class="mr-3 mb-2">Delete</vs-button>
                    </vs-td>
                </vs-tr>
            </template>

        </vs-table>
        <vs-popup class="holamundo" title="Are you sure you want to delete this device" :active.sync="popupActive">
            <vs-button color="danger" v-on:click="deleteDevice" class="mr-3 mb-2">Yes</vs-button>
            <vs-button @click="popupActive=false" class="mr-3 mb-2">No</vs-button>
        </vs-popup>
    </div>
</template>

<script>

    export default {
        name: "device-list",
        data() {
            return {
                popupActive: false,
                id: '',
                data: []
            }
        },
        beforeMount() {
            this.getData()
        },
        computed: {
            token() {
                return JSON.parse(localStorage.user).api_token
            }
        },
        methods: {
            getData() {
                this.$axios.get('/api/admin/remote_devices', {params: {api_token: this.token}})
                    .then((res) => {
                        this.data = res.data
                    })
                    .catch(console.log)
            },
            edit(id) {
                this.$router.push({name: 'edit_remote_device', params: {id}})
            },
            openPopup(id) {
                this.id = id
                this.popupActive = true
            },
            deleteDevice() {
                this.$axios.delete('/api/admin/remote_devices/' + this.id, {params: {'api_token': this.token}})
                    .then(() => {
                        this.popupActive = false
                        this.getData()
                    })
                    .catch(console.log)
            }
        }
    }
</script>

<style scoped>
    .success {
        background: rgb(var(--success)) !important;
        box-shadow: 0 15px 40px -10px rgba(var(--success),.9);
    }
    .danger {
        background: rgb(var(--danger)) !important;
        box-shadow: 0 15px 40px -10px rgba(var(--danger),.9);
    }
</style>
