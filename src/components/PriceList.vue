<template>
<div >
  <table class="table table-striped">
    <thead>
    <tr >
      <th scope="col">Price per Day</th>
      <th scope="col">Price per Rod</th>
      <th scope="col">Price per Hook</th>
    </tr>
    </thead>
    <tbody >
    <tr v-for="(price,index) in prices" :key="index">
      <th scope="row">${{price.price_per_day}}</th>
      <td>${{price.price_per_rod}}</td>
      <td>${{price.price_per_fishing_hook}}</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "PriceList",
  props:['prices']
}
</script>

<style scoped>

</style>