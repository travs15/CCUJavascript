
<template>
  <div class="skill">
    <body>
      <h1>3D map page</h1>
      <div id="viewDiv"></div>
    </body>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";//importar el esri loader
export default {
  name: 'Skills',
  data(){
    return{
      showAlert: true
    }
  },//se declaran los metodos que se van a usar en la aplicacion
  methods: {
    createMap() {
      const options = {
        url: "https://js.arcgis.com/4.8/"
      };
      //se cargan los modulos que se usan del api de javascript
      loadModules(
        [
          "esri/Map",
          "esri/views/SceneView"
        ],
        options
      ).then(([Map, SceneView]) => {
        const map = new Map({
          /*portalItem: {
            id: "f2e9b762544945f390ca4ac3671cfa72"
          }*/
          basemap: "streets",
          ground: "world-elevation"
        });
        const view = new SceneView({
          container: "viewDiv",  // Reference to the DOM node that will contain the view
          map: map  // References the map object created in step 3
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
<style src="./Skills.css" scoped>

</style>
