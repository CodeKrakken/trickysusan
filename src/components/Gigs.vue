<template>
  <div>
    <div class="shadow-one" id="gig-image-container">
      <img src="/images/stage.jpg" id="gig-image" /><br><br>
    </div>
    <div id="gig-caption">
      You will note the lack of bodies both on and off stage.<br>
      As soon as this can be remedied, it shall be.
    </div>
  </div>
</template>

<style scoped>

@media screen and (orientation: portrait) {
  #gig-image {
    width: 100vw
  }

  #gig-caption {
    font-size:calc(6px + 1.5vh);
  }
}

@media screen and (orientation: landscape) {
  #gig-image {
    max-height: 75vh
  }

  #gig-caption {
    font-size:calc(6px + 1.5vw);
  }
}

#gig-image-container {
  max-height: 75vh;
  background: black;
  box-shadow: 15px 15px 15px black, 
              15px -15px 15px black, 
              -15px -15px 15px black, 
              -15px 15px 15px black 
}

#gig-caption {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;

}

</style>