<template>
  <div class="w-100">

      <section class="vh-100 bg-image"
               style="background-image: url('https://previews.123rf.com/images/olhakostiuk/olhakostiuk1811/olhakostiuk181100034/127594571-seamless-pattern-with-fishing-gear-vector-icons-in-flat-style-isolated-on-white-background-.jpg');">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                    <div class="alert-danger"

                         v-for="(message,index) in this.$store.state.message.errors " :key="index">
                      <div>
                        {{ message }}
                      </div>

                    </div>
                    <form>

                      <div class="form-outline mb-4">
                        <input
                            required
                            type="text" id="name" class="form-control form-control-lg"
                            v-model="data['name']"/>
                        <label class="form-label" for="name">Your Full name</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="email" class="form-control form-control-lg"
                               v-model="data['email']"
                               required/>
                        <label class="form-label" for="email">Your Email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="password"
                               class="form-control form-control-lg"
                               v-model="data['password']"
                               required/>
                        <label class="form-label" for="password">Password</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="password_confirmation"
                               class="form-control form-control-lg"
                               v-model="data['password_confirmation']"
                               required/>

                        <label class="form-label" for="password_confirmation">Repeat your
                          password</label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button type="button"
                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                @click=" submit()"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account?

                        <router-link
                            class="fw-bold text-body"
                            :to="{ name: 'LoginPage' }"><u>Login here</u></router-link>
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
</template>

<script>

import axios from "axios";

export default {
  name: 'Register',
  data() {
    return {
      data: [],
    }
  },
  methods: {
    submit() {
      const jsonData = {
        "name": this.data.name,
        "email": this.data.email,
        "password": this.data.password,
        "password_confirmation": this.data.password_confirmation
      }
      const url = 'http://localhost:8000/api'
      axios.post(url + '/register', jsonData)
          .then((response) => {
            if (response.data.errors) {
              console.log()
              this.$store.commit('sendMessage', response.data)
            }else {
              this.$store.commit('sendMessage', response.data)
              this.$router.push('/login')
            }
          })
          .catch((error) => {
            if (error) {
              this.$store.commit('sendMessage', error.response.data.errors)
            }
          });

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
