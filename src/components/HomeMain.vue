<template>
  <div style="width: 100%; height: 100%">
    <b-card
        overlay
        img-src="https://pleasanthillpark.mwcd.org/upload/images/slideshow/sunset_kayak_slideshow_pic.jpg"
        img-alt="Card Image"
        text-variant="black"
    >
      <b-card-text class="container ">
        <div class=" d-inline">
          <h1>Purchase your fishing licence online </h1>
          <h2>Did you know?</h2>
          <h3>Bluefin tuna: The treasure of the sea
            In some countries, canned tuna is so inexpensive that people use it to feed their cats.
            But bluefin meat is a different story.
            The price per pound sits around 20 to 200 dollars.
            So, a 300-pound fish could put between 6000 to 60000 dollars in your pocket.
            Crazy, right? </h3>
          <router-link
              class="fw-bold text-body"
              :to="{ name: 'RegisterPage' }"><u class="text-lg-start">Register here</u></router-link>
        </div>


      </b-card-text>

    </b-card>
  </div>
</template>

<script>
export default {
  name: "HomeMain"
}
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 250px;
}
</style>