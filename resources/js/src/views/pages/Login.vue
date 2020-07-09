<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div v-if="alert" class="alert-danger">
                                  Bad Credentials. Please try again or contact administrator!
                            </div>
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Login</h4>
                                    <p>Welcome back, please login to your account.</p>
                                </div>
                                <vs-input
                                    icon="icon icon-user"
                                    type="email"
                                    icon-pack="feather"
                                    label-placeholder="Email"
                                    v-model="email"
                                    class="w-full no-icon-border"/>

                                <vs-input v-on:keyup.enter="postRequest()"
                                    type="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="Password"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />

                                <div class="flex flex-wrap justify-between my-5">
                                    <router-link to="#">Forgot Password?</router-link>
                                </div>

                                <vs-button @click="postRequest()">Login</vs-button>

                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            alert: false
        }
    },
    methods:{
      postRequest(){
        this.$axios.post('/api/login', {
          email:this.email,
          password:this.password
        }).then((res) =>{
          localStorage.setItem('user', JSON.stringify(res.data.user))
          window.location.href = "/app"
        }).catch((err) => {
          this.alert = true
          console.log(err);
        })
      }
    }
}
</script>

<style lang="scss">
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #1551b1;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #4285F4;
        }
        .bg-github {
          background-color: #333;
        }
    }
}
</style>
