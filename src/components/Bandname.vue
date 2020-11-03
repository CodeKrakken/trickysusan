<template>
  <div id="band-name-container" >
    <img src="../assets/images/band-name.jpg" id="band-name" />
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  #band-name-container {
    float: left; 
    height: 15vh;
    box-shadow:  15px 15px 15px black, 
                15px -15px 15px black, 
               -15px -15px 15px black, 
                -15px 15px 15px black
  }
  
  #band-name { max-width: 10vw; height: 15vh }

</style>