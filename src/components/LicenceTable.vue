<template>
  <div>

    <div class="container-xxl"
         style="height: 100vh"
    >
      <table
          style="background-color: #efefef"
          class="table table-striped">
        <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Rods</th>
          <th scope="col">Hooks</th>
          <th scope="col">Region</th>
          <th scope="col">Valid to</th>
          <th scope="col">Price paid</th>
          <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr style="cursor: pointer"
            @click="oneRecord(licence.id,licence)"
            v-for="(licence,index) in licences" :key="index">
          <th scope="row">{{ licence.address }}</th>
          <td>{{ licence.number_of_rods }}</td>
          <td>{{ licence.number_of_fishing_hooks }}</td>
          <td>{{ licence.region }}</td>
          <td>{{ licence.valid_to }}</td>
          <td>${{ licence.price }}</td>
          <td v-if="licence.valid_to <= moment().format('YYYY-MM-DD') "
              class="text-danger"
          >Expired
          </td>
          <td v-else
              class="text-success">Active
          </td>
          <td>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "LicenceTable",
  methods: {
    oneRecord(id) {
      this.$router.push('/single/' + id)
    },
  },
  computed: {
    licences() {
      return this.$store.state.userLicences
    }
  },
  created() {
    this.$store.dispatch('getLicence')
  }
}
</script>

<style scoped>

</style>