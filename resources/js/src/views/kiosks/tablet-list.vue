<template>
  <div>
    <h2 class="style-title">Tablets</h2>
      <p>Contact your administrator to add this feature.</p>
  </div>
</template>
<script>

export default {
data(){
    return {
        popupActive:false,
        id:'',
        data:[]
    }
},
methods:{
    getData(){
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        this.$axios.get('/api/admin/devices', {params:{api_token:token}}).then((res) =>{
            this.data = res.data
        }).catch((err) => {
            console.log(err);
        })
    },
    edit(id){
        this.$router.push({name:'edit_device', params: {id}})
    },
    openPopup(id){
        this.id = id
        this.popupActive = true
    },
    deleteDevice() {
        let user = JSON.parse(localStorage.user)
        let token = user.api_token
        let url = '/api/admin/device/delete/' + this.id
        this.$axios({
            method: 'DELETE',
            url: url,
            params: {
                'api_token': token
            },
        }).then((res) =>{
            this.popupActive = false
            this.getData()
        }).catch((err) => {
            console.log(err);
        })
    }
},
    beforeMount(){
        this.getData()
    },
}
</script>
