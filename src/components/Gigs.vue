<template>
  <div>
    <div class="shadow-one" id="gig-image-container">
      <img src="/images/stage.jpg" id="gig-image" /><br><br>
    </div>
    <br>
    <div id="gig-caption">
      You will note the lack of bodies both on and off stage.<br>
      As soon as this can be remedied, it shall be.
    </div>
  </div>
</template>

<style scoped>
#gig-image-container {
  max-height: 75vh;
  background: black;
  box-shadow: 15px 15px 15px black, 
              15px -15px 15px black, 
              -15px -15px 15px black, 
              -15px 15px 15px black 
}

#gig-image {
  max-height: 75vh
}

#gig-caption {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center
}

</style>