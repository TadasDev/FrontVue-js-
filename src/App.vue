<template>
  <div
      id="app">
    <div class="container-xxl justify-content-center"
         id="nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div class="container-xxl">
        <span v-if="isLoggedIn">
          Welcome, {{ $store.state.userData.name }}
        </span>
        <router-link
            v-if="!isLoggedIn"
            to="/register">Register
        </router-link>
        <router-link
            v-if="!isLoggedIn"
            to="/login">Login
        </router-link>
        <router-link
            v-if="isLoggedIn"
            to="/buy-licence">Buy Licence
        </router-link>
        <router-link
            to="/licence-list"
            v-if="isLoggedIn"
        >Licence history
        </router-link>
        <router-link
            v-if="isLoggedIn"
            to="/my-profile">My profile
        </router-link>
        <span id="logout">
               <a
                   @click="$store.dispatch('logout')"
                   v-if="isLoggedIn">Logout
               </a>
        </span>
      </div>
    </div>
    <router-view
        style="
        background-image: url('https://previews.123rf.com/images/olhakostiuk/olhakostiuk1811/olhakostiuk181100034/127594571-seamless-pattern-with-fishing-gear-vector-icons-in-flat-style-isolated-on-white-background-.jpg')"/>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLogged === true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Nanum Myeongjo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav div {
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  align-items: center;
}

#nav {
  margin: 0 auto;
  display: flex;
  width: 100%;
  padding: 15px;
}
#logout{
  text-decoration:underline;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #56de2a;
}
.span a.router-link-exact-active{
  color: #56de2a;
}

</style>
