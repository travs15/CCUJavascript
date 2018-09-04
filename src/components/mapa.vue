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

    <div class="map" id="map">
        <div class="jumbotron">
            <div class="row container h-100">
                <div class="col-lg-8 col-md-7">
                    <svg width="500" height="270">
                        <g style="transform: translate(0, 10px)">
                        <path :d="line"/>
                        </g>
                    </svg>
                </div>
                <div class="col-lg-4 col-md-5 d-flex flex-column justify-content-center">
                 <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <span><router-link to="/#"><i class="fas fa-arrow-alt-circle-left"></i> Regresar</router-link></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
export default {
    name: 'mapa',
    data(){
        return{
            data: [99, 71, 78, 25, 36, 92],
            line: '',
        }
    },
    mounted() {
        this.calculatePath();
    },
    methods: {
        getScales() {
          const x = d3.scaleTime().range([0, 430]);
          const y = d3.scaleLinear().range([210, 0]);
          d3.axisLeft().scale(x);
          d3.axisBottom().scale(y);
          x.domain(d3.extent(this.data, (d, i) => i));
          y.domain([0, d3.max(this.data, d => d)]);
          return { x, y };
        },
        calculatePath() {
            const scale = this.getScales();
            const path = d3.line()
            .x((d, i) => scale.x(i))
            .y(d => scale.y(d));
            this.line = path(this.data);
        },
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./mapa.css" scoped>

</style>
