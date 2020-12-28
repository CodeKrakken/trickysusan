<template>
  <div>
    <input 
      type="image" 
      id="band-name" 
      @click="toggleColours()" 
      src="/images/band-name.jpg" 
    />
  </div>
</template>

<script>
export default {
  methods: {
    toggleColours() {
      this.$emit('toggle-colours')
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
    z-index: 1;
    outline: none
  }

  #band-name:focus {
    outline: none
  }

</style>