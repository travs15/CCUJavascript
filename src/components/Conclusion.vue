<template>
    <div class="conc" id="conc">
        <div class="jumbotron">
            <div class="row container h-100">
                <div class="col-lg-8 col-md-7">
                    <div id="viewDiv" class="h-100"></div>
                </div>
                <div class="col-lg-4 col-md-5 d-flex flex-column justify-content-center">
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
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
                container: "viewDiv",
                ui: {
                    components: [ "attribution" ]
                },
              // extent: {
              //     xmin: -9177811,
              //     ymin: 4247000,
              //     xmax: -9176791,
              //     ymax: 4247784,
              //     spatialReference: 102100
              // }
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


            // Desabilitar zoom y panning
            view.on("key-down", function(event){
                var prohibitedKeys = [ "+", "-", "Shift", "_", "=" ];
                var keyPressed = event.key;
                if(prohibitedKeys.indexOf(keyPressed) !== -1){
                    event.stopPropagation();
                }
            });

            view.on("mouse-wheel", function(event){
                event.stopPropagation();
            });

            view.on("double-click", function(event){
                event.stopPropagation();
            });

            view.on("double-click", ["Control"], function(event){
                event.stopPropagation();
            });

            view.on("drag", function(event){
                event.stopPropagation();
            });

            view.on("drag", ["Shift"], function(event){
                event.stopPropagation();
             });

            view.on("drag", ["Shift", "Control"], function(event){
                event.stopPropagation();
            });

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
