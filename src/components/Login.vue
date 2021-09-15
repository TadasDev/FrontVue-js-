<template>
  <div class="w-100">

    <div id="app">
      <section class="vh-100 bg-image"
               style="
               background-image: url('https://previews.123rf.com/images/olhakostiuk/olhakostiuk1811/olhakostiuk181100034/127594571-seamless-pattern-with-fishing-gear-vector-icons-in-flat-style-isolated-on-white-background-.jpg');">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
                      <div class="text-danger"
                           v-for="(message,index) in $store.state.loginMessage" :key="index">
                        {{ message }}
                      </div>
                    <form>

                      <div class="alert-danger">

                      </div>
                      <div class="form-outline mb-4">
                        <input type="email" id="email" class="form-control form-control-lg"
                               v-model="email"
                               required/>
                        <label class="form-label" for="email">Your Email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="password"
                               class="form-control form-control-lg"
                               v-model="password"
                               required
                        />
                        <label class="form-label" for="password">Password</label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button type="button"
                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                @click=" submit()"
                        >
                          Login
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Do not have an account?
                        <router-link
                            class="fw-bold text-body"
                            :to="{ name: 'RegisterPage' }"><u>Register here</u></router-link>
                      </p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>


export default {
  name: "Login",

  data() {
    return {
      email:null,
      password:null
    }
  },
  methods: {
    submit() {

      this.$store.state.loginMessage = []
      const jsonData = {
        "email": this.email,
        "password": this.password,
      }
      this.$store.dispatch('login', jsonData)
      }
  }
}
</script>

<style scoped>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}

.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}

</style>