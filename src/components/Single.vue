<template>
  <div class="container-fluid ">
    <div id="capture"
         class="container-xxl text-black h-100"
         style="background-color: #efefef">
      <h1 class="text-success"
          style="text-align: center">
        Fishing Pass
      </h1>
      <div class="d-flex ">
        <div>

          <div
              class="container-xxl text-black "
              style="background-color: #efefef ; text-align: left; padding: 15px">

            <div class="d-flex justify-content-end"
                 style="width: 750px">
            </div>
            <h5>
              Fisherman Address
            </h5>
            {{ single.address }}
            <h5 class="pass-half">
              Region allowed to fish in
            </h5>
            {{ single.region }}
            <h5 class="pass-half">
              Expires at
            </h5>
            {{ single.valid_to }}
            <h5 class="pass-half">
              Equipment details
            </h5>
          </div>
        </div>
        <div class=""
             style="width: 100%; height: 100%">
          <QRCanvas
              :options="options"/>
        </div>
      </div>
      <div class="container-xxl d-flex justify-content-evenly"
           style="padding: 15px;margin: 0">
        <div style="text-align: center">
          <h5 class=""
              style="">
            Number of rods
          </h5>{{ single.number_of_rods }}
        </div>
        <div style="text-align: center">
          <h5 class="">
            Number of fishing hooks
          </h5>{{ single.number_of_fishing_hooks }}
        </div>
        <div style="text-align: center">
          <h5 class="">
            Price paid
          </h5> ${{ single.price }}
        </div>
      </div>
    </div>
    <div class="container p-2"
         style="text-align:right">
      <button class="btn btn-danger" @click="downloadWithCSS">Download PDF</button>
      <div class="container-xxl "
           style="margin-top: 650px;">

      </div>
    </div>


  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from "html2canvas"
import {QRCanvas} from 'qrcanvas-vue';

export default {
  name: "Single",
  components: {
    QRCanvas
  },
  computed: {
    options() {
      const url = 'http://localhost:8080/#'
      return {
        data: url + this.$route.path,
        cellSize: 15
      }
    },
    single() {
      const singleId = this.$route.params.id
      return this.$store.state.userLicences.find(x => x.id === Number(singleId))
    }
  },

  methods: {
    downloadWithCSS() {
      html2canvas(document.querySelector("#capture"))
          .then(function (canvas) {
            const doc = new jsPDF('l', 'mm', [300, 120]);
            const img = canvas.toDataURL("image/png", 1);
            doc.addImage(img, 'PNG', 0, 0, 300, 120); //image place
            doc.save("sample.pdf");
          });
    },
  }
}
</script>

<style scoped>
.pass-half {
  margin-top: 25px;
  border-top: 2px solid grey;
  padding-top: 15px;
  width: 100%;
}
</style>