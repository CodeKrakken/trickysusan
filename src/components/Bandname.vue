<template>
  <div>
    <button @click="goHome()">
      <img src="/images/band-name.jpg" id="band-name" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$emit('select-tab', "Videos")
    }
  }
}
</script>

<style scoped>

  @viewport { 
    width: device-width;
    height: device-height
  }
  
  #band-name {
    position: absolute;
    top: 10px;
    left: 10px; 
    width: 12vw;
    height: auto;
    min-height: 56px;
    min-width: 75px;
    box-shadow: 15px  15px 15px black, 
                15px -15px 15px black, 
               -15px -15px 15px black, 
               -15px  15px 15px black;
    z-index: 1
  }

</style>