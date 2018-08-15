<template>
  <div id="app">
  <!--nav bar para la aplicacion-->

    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">Esri Logo</a>
      <img src="assets/logo.png" alt="logo">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">GeoGeeks <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Semillero de innovación geográfica</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <router-link to="/"><a class="btn btn-outline-primary rounded-circle" id="btn1" role="button">
            <i class="fas fa-clone"></i></a></router-link>
        </div>
        <div class="col-sm">
          <router-link to="/about"><a class="btn btn-outline-primary rounded-circle" id="btn2" href="" role="button">
            <i class="fas fa-globe-americas"></i></a></router-link>
        </div>
        <div class="col-sm">
          <router-link to="/mapa"><a class="btn btn-outline-primary rounded-circle" id="btn3" href="" role="button">
            <i class="fas fa-sync"></i></a></router-link>
        </div>
        <div class="col-sm">
          <router-link to="/conclusion"><a class="btn btn-outline-primary rounded-circle" id="btn4" href="" role="button">
            Conclusion</a></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./App.css" scoped>

</style>
