
<template>
  <div class="skill">
    <body>
      <h1>Inicio</h1>
      <div id="viewDiv"></div>
      <div class="container">

        <div class="row mt-5">
          <div class="col-4">
            <div class="card mx-auto">
              <img class="card-img-top img-responsive" src="/thumb2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Gráfica</h5>
                <p class="card-text">Descripción</p>
                <router-link to="/about"><a href="#" class="btn btn-outline-primary">Ver más</a></router-link>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="card mx-auto">
              <img class="card-img-top img-responsive" src="/thumb3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Mapa</h5>
                <p class="card-text">Descripción</p>
                <router-link to="/mapa"><a href="#" class="btn btn-outline-primary">Ver más</a></router-link>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="card mx-auto">
              <img class="card-img-top img-responsive" src="/thumb1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Integración</h5>
                <p class="card-text">Descripción</p>
                <router-link to="/conclusion"><a href="#" class="btn btn-outline-primary">Ver más</a></router-link>
              </div>
            </div>
          </div>

        </div>
        <router-view/>
      </div>
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
