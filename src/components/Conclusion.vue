<template>
  <div class="conc">
    <h1>this is a conclusion page</h1>
    <p>discusion del resultado de la aplicación</p>
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";//importar el esri loader
export default {
  name: 'Conclusion',
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
          basemap: "none"// si se quita el mapa base no es necesario extent
        });

        const view = new MapView({
          map: map,
          container: "viewDiv"
          //,extent: { // autocasts as new Extent()
          //  xmin: -9177811,
          //  ymin: 4247000,
          //  xmax: -9176791,
          //  ymax: 4247784,
          //  spatialReference: 102100
          //}
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

        var cobertura = new FeatureLayer({
          // URL to the service
          url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/MapaCoberturasEnergia_WFL1/FeatureServer"
        });

        //map.add(vientosVelocidad);
        //map.add(vientosEnergia);
        //map.add(cobertura);
        map.add(radiacionSolar);
        //map.add(estacionesEnergia);

      });

    }
  },
  mounted() {
    this.createMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Conclusion.css" scoped>

</style>
