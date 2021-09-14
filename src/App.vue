<template>
  <div
      id="app">
    <div class="container-xxl justify-content-center"
        id="nav">
      <div >
        <router-link to="/">Home</router-link>

      </div>
      <div class="container-xxl">
        <router-link
            v-if="$store.state.isLogged === false"
            to="/register">Register
        </router-link>
        <router-link
            v-if="$store.state.isLogged === false"
            to="/login">Login
        </router-link>
        <router-link
            v-if="$store.state.isLogged === true"
            to="/buy-licence">Buy Licence
        </router-link>
        <router-link
            to="/licence-list"
            v-if="$store.state.isLogged === true"
        >Licence history</router-link>
        <span>
               <a @click="$store.dispatch('logout')"
                  v-if="this.$store.state.isLogged === true ">Logout</a>
        </span>
      </div>
    </div>
    <router-view
        style="
        background-image: url('https://previews.123rf.com/images/olhakostiuk/olhakostiuk1811/olhakostiuk181100034/127594571-seamless-pattern-with-fishing-gear-vector-icons-in-flat-style-isolated-on-white-background-.jpg')" />
  </div>
</template>
<script>
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
  width: 800px;
  display: flex;
  align-items: center;
}

#nav {
  margin: 0 auto;
  display: flex;
  width: 1200px;
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #377cd2;
}
</style>
