<template>
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-5 col-md-5 col-lg-5 col-xl-4"
    >
      <div class="card" style="border-radius: 15px;">
        <div class="card-body p-5"
             style="background-color: #efefef">
          <h2 class="text-uppercase text-center mb-5">Edit your profile details</h2>

          <form class="p-3 mb-3"
          >
            <div class="form-outline mb-4">
              <input
                  required
                  type="text" id="name" class="form-control form-control-lg"
                  v-model="name"/>
              <label class="form-label" for="name">Full name</label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control form-control-lg"
                     v-model="email"
                     required/>
              <label class="form-label" for="email">Your Email</label>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      @click=" submit()">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: this.$store.state.userData.name,
      email: this.$store.state.userData.email
    }
  },
  methods: {
    submit() {
    const  jsData = {
        "name":this.name,
        "email":this.email,
      }
      console.log(jsData)
      this.$store.dispatch('editProfile',jsData)
    }
  }
}
</script>

<style scoped>

</style>