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
                          Bad Credentials. Please try again or contact administrator.
                    </div>
                    <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
                        <div class="p-8">
                          <div class="vx-card__title mb-8">
                              <h4 class="mb-4">Recover your password</h4>
                              <p>Please enter your email address and we'll send you instructions on how to reset your password.</p>
                              <p class="alert-success text-bold" v-if="success == true">We sent reset password link. Please check your inbox.</p>
                          </div>

                        <vs-input
                            icon="icon icon-user"
                            type="email"
                            id="email"
                            icon-pack="feather"
                            label-placeholder="Email"
                            v-model="email"
                            class="w-full no-icon-border mb-8"/>
                          <vs-button type="border" to="/app/login" class="px-4 w-full md:w-auto">Back To Login</vs-button>
                          <vs-button @click="requestResetPassword" class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0">Recover Password</vs-button>
                      </div>
                    </form>
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
        email: null,
        has_error: false,
        success: false,
      }
    },
    methods: {
        requestResetPassword() {
          this.$axios.post("/api/reset-password", {email: this.email}).then(result => {
              this.response = result.data;
              console.log(result.data);
              this.success = true;
          }, error => {
              console.error(error);
          });
        }
    }
}
</script>