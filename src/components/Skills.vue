
<template>
  <div class="skill">
  <body>
      <div id="viewDiv"></div>
      <div class="container">

        <div class="row mt-5">
          <div class="col-4">
            <div class="card mx-auto">
              <img class="card-img-top img-responsive" src="/thumb2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Gráfica</h5>
                <p class="card-text">Descripción</p>
                <router-link to="/mapa"><a href="#" class="btn btn-outline-primary">Ver más</a></router-link>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="card mx-auto">
              <img class="card-img-top img-responsive" src="/thumb3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Mapa</h5>
                <p class="card-text">Descripción</p>
                <router-link to="/about"><a href="#" class="btn btn-outline-primary">Ver más</a></router-link>
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
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
