<template>
    <!--<div class="map">-->
        <!--<body>-->
            <!--<svg width="500" height="270">-->
                <!--<g style="transform: translate(0, 10px)">-->
                <!--<path :d="line"/>-->
                <!--</g>-->
            <!--</svg>-->
        <!--</body>-->
    <!--</div>-->

    <div class="grafica" id="grafica">
        <div class="jumbotron">
            <div class="row container h-100">
                <div class="col-lg-8 col-md-7">
                    <svg width="500" height="300"></svg>
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
    import * as d3 from 'd3';

    export default {
        name: 'grafica',
        data(){
            return{
                /*data: d3.queue().defer(d3.csv, "data_dep.csv").defer(d3.csv, "data_mun.csv").await(function (e, dataDep, dataMun) {
                            if (e) {
                                console.error('Error getting or parsing the data.');
                                throw e;
                            }
                            var chart = bubbleChart().width(600).height(400);

                            d3.select('#chart').datum(dataMun).call(chart);
                        }),*/
            }
        },
        mounted() {
            //var svg = d3.select(this.$el);
            var svg = d3.select("svg");
            var width = +svg.attr('width');
            var height = +svg.attr('height');

            // var data = [
            //     {name: 'one', val: 100},
            //     {name: 'two', val: 150},
            //     {name: 'three', val: 200}
            // ];

            var data = [{"FID":25,"DEPARTAMENTO":"AMAZONAS","RANGO":"< 41%","POBLACION":78830,"REGION":"AMAZONIA","COBERTURA":37.69454545},
                {"FID":30,"DEPARTAMENTO":"ANTIOQUIA","RANGO":"89% - 96%","POBLACION":6690977,"REGION":"ANDINA","COBERTURA":95.14408},
                {"FID":22,"DEPARTAMENTO":"ARAUCA","RANGO":"78% - 89%","POBLACION":270708,"REGION":"ORINOQUIA","COBERTURA":92.49142857},
                {"FID":31,"DEPARTAMENTO":"ATLÁNTICO","RANGO":"89% - 96%","POBLACION":2546138,"REGION":"CARIBE","COBERTURA":98.05434783},
                {"FID":0,"DEPARTAMENTO":"BOGOTÁ","RANGO":"89% - 96%","POBLACION":8181047,"REGION":"ANDINA","COBERTURA":99.99},
                {"FID":1,"DEPARTAMENTO":"BOLÍVAR","RANGO":"78% - 89%","POBLACION":2171558,"REGION":"CARIBE","COBERTURA":85.35869565},
                {"FID":2,"DEPARTAMENTO":"BOYACÁ","RANGO":"78% - 89%","POBLACION":1281979,"REGION":"ANDINA","COBERTURA":93.50544715},
                {"FID":3,"DEPARTAMENTO":"CALDAS","RANGO":"89% - 96%","POBLACION":993870,"REGION":"ANDINA","COBERTURA":98.52444444},
                {"FID":4,"DEPARTAMENTO":"CAQUETÁ","RANGO":"64% - 78%","POBLACION":496262,"REGION":"AMAZONIA","COBERTURA":83.61375},
                {"FID":23,"DEPARTAMENTO":"CASANARE","RANGO":"78% - 89%","POBLACION":375258,"REGION":"ORINOQUIA","COBERTURA":71.54947368},
                {"FID":5,"DEPARTAMENTO":"CAUCA","RANGO":"64% - 78%","POBLACION":1416145,"REGION":"PACIFICO","COBERTURA":83.08285714},
                {"FID":6,"DEPARTAMENTO":"CESAR","RANGO":"78% - 89%","POBLACION":1065637,"REGION":"CARIBE","COBERTURA":90.1228},
                {"FID":9,"DEPARTAMENTO":"CHOCÓ","RANGO":"41% - 64%","POBLACION":515166,"REGION":"PACIFICO","COBERTURA":73.408},
                {"FID":7,"DEPARTAMENTO":"CÓRDOBA","RANGO":"78% - 89%","POBLACION":1788648,"REGION":"CARIBE","COBERTURA":84.93},
                {"FID":8,"DEPARTAMENTO":"CUNDINAMARCA","RANGO":"89% - 96%","POBLACION":2804238,"REGION":"ANDINA","COBERTURA":98.75112069},
                {"FID":26,"DEPARTAMENTO":"GUAINÍA","RANGO":"64% - 78%","POBLACION":43446,"REGION":"AMAZONIA","COBERTURA":66.60666667},
                {"FID":27,"DEPARTAMENTO":"GUAVIARE","RANGO":"41% - 64%","POBLACION":115829,"REGION":"AMAZONIA","COBERTURA":67.5575},
                {"FID":10,"DEPARTAMENTO":"HUILA","RANGO":"78% - 89%","POBLACION":1197049,"REGION":"ANDINA","COBERTURA":96.11783784},
                {"FID":11,"DEPARTAMENTO":"LA GUAJIRA","RANGO":"64% - 78%","POBLACION":1040193,"REGION":"CARIBE","COBERTURA":81.118},
                {"FID":12,"DEPARTAMENTO":"MAGDALENA","RANGO":"78% - 89%","POBLACION":1298562,"REGION":"CARIBE","COBERTURA":84.31866667},
                {"FID":13,"DEPARTAMENTO":"META","RANGO":"78% - 89%","POBLACION":1016672,"REGION":"ORINOQUIA","COBERTURA":85.63689655},
                {"FID":14,"DEPARTAMENTO":"NARIÑO","RANGO":"78% - 89%","POBLACION":1809301,"REGION":"PACIFICO","COBERTURA":94.239375},
                {"FID":15,"DEPARTAMENTO":"NORTE DE SANTANDER","RANGO":"78% - 89%","POBLACION":1391366,"REGION":"ANDINA","COBERTURA":92.07525},
                {"FID":24,"DEPARTAMENTO":"PUTUMAYO","RANGO":"41% - 64%","POBLACION":358896,"REGION":"AMAZONIA","COBERTURA":69.40076923},
                {"FID":16,"DEPARTAMENTO":"QUINDÍO","RANGO":"89% - 96%","POBLACION":574960,"REGION":"ANDINA","COBERTURA":98.8825},
                {"FID":17,"DEPARTAMENTO":"RISARALDA","RANGO":"89% - 96%","POBLACION":967780,"REGION":"ANDINA","COBERTURA":96.73285714},
                {"FID":18,"DEPARTAMENTO":"SANTANDER","RANGO":"78% - 89%","POBLACION":2090854,"REGION":"ANDINA","COBERTURA":89.42022989},
                {"FID":19,"DEPARTAMENTO":"SUCRE","RANGO":"78% - 89%","POBLACION":877024,"REGION":"ANDINA","COBERTURA":96.97153846},
                {"FID":20,"DEPARTAMENTO":"TOLIMA","RANGO":"78% - 89%","POBLACION":1419957,"REGION":"ANDINA","COBERTURA":92.25489362},
                {"FID":21,"DEPARTAMENTO":"VALLE DEL CAUCA","RANGO":"78% - 89%","POBLACION":4755760,"REGION":"PACIFICO","COBERTURA":97.94309524},
                {"FID":28,"DEPARTAMENTO":"VAUPÉS","RANGO":"< 41%","POBLACION":44928,"REGION":"AMAZONIA","COBERTURA":71.41},
                {"FID":29,"DEPARTAMENTO":"VICHADA","RANGO":"< 41%","POBLACION":77276,"REGION":"ORINOQUIA","COBERTURA":65.3875}]


            var x = d3.scaleBand()
                .rangeRound([0, width]).padding(0.1)
                .domain(data.map(d => d.name));
            var y = d3.scaleLinear()
                .rangeRound([height * 0.3 - 20, 0])
                .domain([0, d3.max(data, d => d.val)]);

            function addRectsWithName(elem, name) {
                elem.append('text')
                    .text(name)
                    .attr('x', width / 2)
                    .attr('y', 5)
                    .attr('text-anchor', 'middle');
                elem.selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    // We add attr here
                    .attr('x', d => x(d.name))
                    .attr('class', d => d.name)
                    .attr('y', d =>  y(d.val))
                    .attr('width', x.bandwidth())
                    .attr('height', d => y.range()[0] - y(d.val))
            }


            /*svg
              .append('g')
              .attr('id', 'bars-style')
              .attr('transform', `translate(0, 20)`)
              .call(addRectsWithName, 'Basic styles');*/

            // vue loader will substitute data attribute for styles
            var STYLE_MODULE_NAME = this.$el.attributes[0].name;
            svg.append('g')
                .attr('transform', `translate(0, ${height * 0.3 + 20})`)
                .call(addRectsWithName, 'Scoped styles')
                .selectAll('rect')
                .attr(STYLE_MODULE_NAME, '')

            /*svg
              .append('g')
              .attr('id', 'bars-style-sass')
              .attr('transform', `translate(0, ${height * 0.6 + 20})`)
              .call(addRectsWithName, 'Sass styles');*/


        },
        methods: {


        },
    }
</script>

<style src="./styles.css" scoped>

</style>

<style scoped>
    .one {
        fill: #154890
    }
    .two {
        fill: #e1d4c0
    }
    .three {
        fill: #ff6600
    }
</style>-->