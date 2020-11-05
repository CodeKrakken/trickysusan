<template>
  <div>
    <div class="photo-outer">
      <img :src="images[selectedImageIndex]" class="photo" />
    </div>
    <div id="video-navigator">
      <button @click="previousImage()" class="nav-button">
        <img src="/images/previous-button.png" id="previous-icon" />
      </button>
      <div id="caption" />
      <button @click="nextImage()" class="nav-button">
        <img src="/images/next-button.png" id="next-icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/images/A_IMGP9182-1-StandingLilWall_neon.jpg',
        '/images/B_IMGP8878-1_WallSatire_Neon_Blue.jpg',
        '/images/C_IMGP9120-1_LilWall_neon.jpg',
        '/images/D_IMGP8979-1_Chair_2_Neon_lightening.jpg',
        '/images/E_IMGP8842-1_Val_Neon.jpg',
        '/images/F_8832-1_Wall_neon.jpg',
        '/images/IMGP9959.jpg',
        '/images/promo.jpg',
        '/images/IMGP9985.jpg',
        '/images/WaterRats.jpg',
        '/images/IMGP9917.jpg',
      ],
      selectedImageIndex: 1,
    }
  },
  methods: {
    nextImage() {
      this.selectedImageIndex === (this.images.length - 1) ?
      this.selectedImageIndex = 0 :
      this.selectedImageIndex += 1;
    },
    previousImage() {
      this.selectedImageIndex === 0 ?
      this.selectedImageIndex = (this.images.length - 1) :
      this.selectedImageIndex -= 1;
    }
  }
}
</script>

<style scoped>

.photo-outer {
  height: 75vh;
}

.photo {
  height: 75vh;
  box-shadow: 20px 20px 20px black, 
              20px -20px 20px black, 
              -20px -20px 20px black, 
              -20px 20px 20px black
}

#video-navigator {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 90vh;
  justify-content: center;
  background: transparent;
  align-content: center;
  border: none
}

.nav-button {
  filter: brightness(50%);
  background: black;
  width: 3vw;
  height: 3vw;
  transition: all 0.1s ease;
  box-shadow: 5px 5px 5px black, 
              5px -5px 5px black,
              -5px -5px 5px black,
              -5px 5px 5px black;
  border: none
}

.nav-button:focus, .button:focus, [type="submit"]:focus {
   outline: none;
}

.nav-button:hover {
  filter: brightness(75%);
  transition: all 0.2s ease;
}

.nav-button:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

#previous-icon { width: 100% }

#next-icon { width: 100% }

#caption {
  font-size: 150%;
  background: transparent;
  width: 25%;
  text-align: center;
}

</style>