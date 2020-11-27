<template>
  <div id="band-name-container" >
    <img src="/images/band-name.jpg" id="band-name" />
  </div>
</template>

<style scoped>

  @viewport { 
    width: device-width;
    height: device-height
  }

  #band-name-container {
    float: left; 
    height: 15vh;
    width: 15vh
  }
  
  #band-name { 
    width: 10vw; 
    height: auto;
    min-height: 56px;
    min-width: 75px;
    box-shadow: 15px  15px 15px black, 
                15px -15px 15px black, 
               -15px -15px 15px black, 
               -15px  15px 15px black
  }


</style>