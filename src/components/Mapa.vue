<template>
    <div class="mapa" id="mapa">
        <div class="jumbotron">
            <div class="row container h-100">
                <div class="col-lg-8 col-md-7">
                    <div id="viewDiv" class="h-100"></div>
                </div>
                <div class="col-lg-4 col-md-5 d-flex flex-column justify-content-center">
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <span><router-link to="/main"><i class="fas fa-arrow-alt-circle-left"></i> Regresar</router-link></span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
var dojoConfig = {
    has: {
        "esri-featurelayer-webgl": 1
    }
};

import { loadModules } from "esri-loader";
export default {
    name: 'mapa',
    data(){
        return {showAlert: true}
    },
    methods: {
        createMap() {

            const options = {
            url: "https://js.arcgis.com/4.8/"
        };

        // Cargar modulos que se utilizan en el api de javascript
        loadModules([
            "esri/views/MapView",
            "esri/Map",
            "esri/layers/FeatureLayer",

            "esri/core/watchUtils",
            "dojo/query"
            ], options
        ).then(([MapView, Map ,FeatureLayer, watchUtils, dojoQuery]) => {

            // Acceder y declarar las diferentes capas
            const coberturaDpto = new FeatureLayer({
                portalItem: {
                    id: "213d1c47029640278edebaeda4aad2ac"
                }
            });

            const estacionesEnergia = new FeatureLayer({
                url: "http://arcgis.simec.gov.co:6080/arcgis/rest/services/UPME_EN/UPME_EN_Generación_Real/MapServer/0"
            });


            // Crear mapa
            const map = new Map({
                basemap: "none",
                layers: [coberturaDpto]
            });

            // Crear vista del mapa
            const view = new MapView({
                map: map,
                container: "viewDiv",
                ui: {
                    components: [ "attribution" ]
                }
            });

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


            // Mostrar tooltip para hover
            view.whenLayerView(coberturaDpto).then(setupHoverTooltip);

            function setupHoverTooltip(layerview) {
                var promise;
                var highlight;

                var tooltip = createTooltip();
                console.log(tooltip);

                view.on("pointer-move", function(event) {
                    if (promise) {
                        promise.cancel();
                    }

                    promise = view.hitTest(event.x, event.y)
                        .then(function(hit) {
                            promise = null;

                            if (highlight) {
                                highlight.remove();
                                highlight = null;
                            }

                            var results = hit.results.filter(function(result) {
                                return result.graphic.layer === coberturaDpto;
                            });

                            if (results.length) {
                                var graphic = results[0].graphic;
                                var screenPoint = hit.screenPoint;

                                highlight = layerview.highlight(graphic);
                                tooltip.show(screenPoint, "TOOLTIP");
                            } else {
                                tooltip.hide();
                            }
                        });
                    });
                }

            function createTooltip () {
                var tooltip = document.createElement("div");
                var style = tooltip.style;

                tooltip.setAttribute("role", "tooltip");
                tooltip.classList.add("tooltip");

                var textElement = document.createElement("div");
                textElement.classList.add("esri-widget");
                tooltip.appendChild(textElement);

                view.container.appendChild(tooltip);

                var x = 0;
                var y = 0;
                var targetX = 0;
                var targetY = 0;
                var visible = false;

                function move () {
                    x += (targetX - x) * 0.1;
                    y += (targetY - y) * 0.1;

                    if (Math.abs(targetX - x) < 1 && Math.abs(targetY - y) < 1) {
                        x = targetX;
                        y = targetY;
                    } else {
                        requestAnimationFrame(move);
                    }

                    style.transform = "translate3d(" + Math.round(x) + "px," + Math.round(y) + "px, 0)";
                }

                return {
                    show: function (point, text) {
                        if (!visible) {
                            x = point.x;
                            y = point.y;
                        }

                        targetX = point.x;
                        targetY = point.y;
                        style.opacity = 1;
                        visible = true;
                        textElement.innerHTML = text;

                        move();
                    },

                    hide: function () {
                        style.opacity = 0;
                        visible = false;
                    }
                };
            }

            // Añadir fuentes
            const sourceHtml = `Fuente: <a href="http://arcgis.simec.gov.co:6080/arcgis/rest/services" target="_blank">UPME<a/>`;

            coberturaDpto.watch("loaded", function(){
                watchUtils.whenFalseOnce(view, "updating", function(){
                    var attribs = dojoQuery(".esri-attribution__powered-by")[0];
                    attribs.innerHTML = sourceHtml;
                });
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
<style src="./mapa.css" scoped>

</style>
