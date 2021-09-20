<template>
  <div class="view" >
           <!-- <img src="..\assets\Children2.jpg" class="img-responsive center" alt="" width="400" height="200">  -->
           <video width="320" height="240" autoplay loop muted>
              <source src="Ascrea - Agence de communication digitale Casablanca.mp4" type="video/mp4">
              
              Your browser does not support the video tag.
            </video>
  </div>
</template>

<script>
  export default {
    name: 'accueil',

  }
</script>
<style >

video {
  width: 100%;
  height: auto;
}

v-img.back{
  position: absolute;
  width: 100%;
}
nav.bottomNav{
  background-color:rgba(0,0,0,0.4);
  position: absolute;
  width: 100%;
  bottom: -19px;
}

 
/* Large desktop */
@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {

}

/* Landscape phones and down */
.center{
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
</style>
