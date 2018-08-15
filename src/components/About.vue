<template>
  <div class="about">
    <div class="holder">
      <div v-bind:class="{alert: showAlert}"></div>
    </div>
    <body>
      <h1>2D map page</h1>
      <p>Visualización de mapa 2D</p>
      <div id="viewDiv"></div>
    </body>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";//importar el esri loader
export default {
  name: 'About',
  data(){
    return{
      showAlert: true
    }
  },
  //se declaran los metodos que se van a usar en la aplicacion
  methods: {
    createMap() {
      const options = {
        url: "https://js.arcgis.com/4.8/"
      };
      //se cargan los modulos que se usan del api de javascript
      loadModules(
        [
          "esri/views/MapView",
          "esri/WebMap"
        ],
        options
      ).then(([MapView, WebMap]) => {
        const webmap = new WebMap({
          portalItem: {
            id: "f2e9b762544945f390ca4ac3671cfa72"
          }
        });
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
        view.constraints = {
          rotationEnabled: false
        };
      });
    }
  },
  mounted() {
    this.createMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./About.css" scoped>

</style>
