<template>
  <div>
    <img src="/images/band-name.jpg" id="band-name" />
  </div>
</template>

<style scoped>

  @viewport { 
    width: device-width;
    height: device-height
  }
  
  #band-name {
    position: absolute;
    top: 10px;
    left: calc(10px + 3vw); 
    width: 12vw;
    height: auto;
    min-height: 56px;
    min-width: 75px;
    box-shadow: 15px  15px 15px black, 
                15px -15px 15px black, 
               -15px -15px 15px black, 
               -15px  15px 15px black;
  }
  


</style>