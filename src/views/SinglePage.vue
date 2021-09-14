<template>
<div>
  <Single :licences="licences"/>
</div>
</template>

<script>
import Single from "@/components/Single";
export default {
  name: "SinglePage",
  components: {Single},
  methods: {
    computed: {
      licences() {
        return this.$store.state.userLicences
      }

    }
  }
}
</script>

<style scoped>

</style>