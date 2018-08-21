<template>
  <div id="app">
    <!--nav bar para la aplicacion-->

    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="http://desarrolladores.esri.co/"><img id="logo" src='logo.png' alt=""></a>
        <router-link to="/"><a class="btn btn-outline-primary"><i class="fas fa-home"></i></a></router-link>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>

  <!--
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
C</a></router-link>
</div>
</div>
</div>
<router-view/>
</div>
-->
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./App.css" scoped>

</style>
