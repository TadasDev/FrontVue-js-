<template>
  <div class="container-xxl p-3 mb-2 bg-light text-black "
       style="height: 95vh ">
    <div class="container-xxl"
         style="margin: 0 ;padding: 0"><h3>Fill this form to get your licence!</h3></div>
    <div class="container-xxl" style="margin: 100px 0 250px 0">

      <PriceList :prices="prices"/>

      <div class="input-group mb-3"
           style="margin-top: 100px">

      <span class="input-group-text "
            style="width: 12%"
            id="s">Home address</span>
        <input type="text"
               id="address"
               class="form-control "
               placeholder="Home address"
               aria-label="address"
               aria-describedby="address"
               v-model="data['address']"/>
      </div>
      <div style="display: flex ; justify-content: space-between">
        <div class="input-group mb-3  "
             style="width: 49%">
      <span class="input-group-text "
            style="width: 25%"
            id="rods">Number of rods</span>
          <input type="number" class="form-control" placeholder="Amount" aria-label="Username"
                 aria-describedby="basic-addon2"
                 v-model="data['number_of_rods']"
                 min='0'
          />
        </div>
        <div class="input-group mb-3 "
             style="width: 49%">
      <span class="input-group-text "
            style="width: 25%"
            id="hooks">Fishing hooks</span>
          <input type="number" class="form-control" placeholder="Amount" aria-label="Username"
                 aria-describedby="basic-addon2"
                 v-model="data['number_of_fishing_hooks']"
                 min='0'
          />
        </div>
      </div>
      <div style="display: flex ; justify-content: space-between">

        <div class="input-group mb-3 "
             style="width: 49%">
        <span class="input-group-text"
              style="width: 25%"
        >Valid from</span>
          <input type="date"
                 :min="moment().format('YYYY-MM-DD')"
                 v-model="dateFrom"

                 class="form-control" aria-label="Amount (to the nearest dollar)"/>

        </div>
        <div class="input-group mb-3"
             style="width: 49%">
        <span class="input-group-text"
              style="width: 25%"
        >Valid to</span>
          <input
              :min="moment().format('YYYY-MM-DD')"
              v-model="dateTo"
              type="date"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"/>

        </div>

      </div>

      <span class="container-xxl d-inline-flex">
           Select region
      </span>

      <select class="form-select "
              aria-label="Default select example"
              v-model="selected"
      >
        <option
            v-for="(region,index) in $store.state.ListOfRegions" :key="index"
            :value="region.region"
        >
          {{ region.region }}
        </option>
      </select>
      <div>
        <div
            class=" bg-light text-success"
            v-if="!$store.state.message">
          {{ $store.state.successMessage }}
        </div>

      </div>
      <div class="d-flex justify-content-end "
           style="padding-top: 20px">

        <div style="padding-right: 50px "
             v-if="totalPriceComputed"
             class="d-inline-flex justify-content-center align-items-center">
          Total : ${{ totalPriceComputed }}
        </div>

        <button type="button"
                @click="pay()"
                class="btn btn-outline-secondary w-25 ">Pay
        </button>

      </div>

    </div>
  </div>

</template>

<script>

import PriceList from "@/components/PriceList";

import moment from 'moment'

export default {
  name: "BookingField",
  components: {PriceList},
  data() {
    return {
      selected: {},
      data: {
        number_of_rods: undefined,
        number_of_fishing_hooks: undefined
      },
      dateFrom: moment().format('YYYY-MM-DD'),
      dateTo: moment().format('YYYY-MM-DD'),
      message: [],
    }
  },
  computed: {
    totalPriceComputed() {
      const dateFrom = this.dateFrom.split('-')
      const dateTo = this.dateTo.split('-')

      const a = moment([dateFrom[0], dateFrom[1], dateFrom[2]]);
      const b = moment([dateTo[0], dateTo [1], dateTo [2]]);
      const totalDays = b.diff(a, 'days')

      const numOfRods = this.data.number_of_rods
      const numOfHooks = this.data.number_of_fishing_hooks

      const PricePerDay = this.prices[0].price_per_day
      const PricePerRod = this.prices[0].price_per_rod
      const PricePerHook = this.prices[0].price_per_fishing_hook

      return (totalDays * PricePerDay)
          + (numOfRods * PricePerRod) + (numOfHooks * PricePerHook)

    },
    prices() {
      return this.$store.state.prices
    }
  },
  methods: {
    pay() {
      this.data['valid_from'] = this.dateFrom
      this.data['valid_to'] = this.dateTo
      this.data['region'] = this.selected
      this.$store.dispatch('createLicence', this.data)
    }
  },
  mounted() {
    this.$store.dispatch('getRegions')

  },
  created() {
    this.$store.dispatch('getPrices')
  }
}
</script>

<style scoped>

</style>