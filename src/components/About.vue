<template>
  <div class="about" id="about">
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
          //"esri/WebMap",
          "esri/Map",
          "esri/layers/FeatureLayer"
        ],
        options
      ).then(([MapView, /*WebMap,*/ Map ,FeatureLayer]) => {
        /*const webmap = new WebMap({
          portalItem: {
            id: "f2e9b762544945f390ca4ac3671cfa72"
          }
        });*/
        var map = new Map({
          basemap: "gray"
          //url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Radiacion_Solar/MapServer"
        });

        const view = new MapView({
          map: map,
          container: "viewDiv"
        });
        // Cargar capa de plantas de generacion real
        var estacionesEnergia = new FeatureLayer({
          // URL to the service
          url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generación_Real/MapServer/0"
        });

        var radiacionSolar = new FeatureLayer({
          // URL to the service
          url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Radiacion_Solar/MapServer/1"
        });

        var vientosEnergia = new FeatureLayer({
          // URL to the service
          url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Viento_Energia_50/MapServer/0"
        });

        var vientosVelocidad = new FeatureLayer({
          // URL to the service
          url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Viento_Velocidad/MapServer/0"
        });
        //map.add(vientosVelocidad);
        //map.add(vientosEnergia);
        //map.add(radiacionSolar);
        map.add(estacionesEnergia);

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
