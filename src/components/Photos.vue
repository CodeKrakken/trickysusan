<template>
  <div>
    <!-- <div class="photo-outer"> -->
      <img :src="images[selectedImageIndex]" class="photo" />
    <!-- </div> -->
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
        '/images/0.jpg',
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
        '/images/9.jpg',
        '/images/10.jpg',
      ],
      selectedImageIndex: (this.getIndex() || 0)
    }
  },
  methods: {
    nextImage() {
      this.selectedImageIndex === (this.images.length - 1) ?
      this.selectedImageIndex = 0 :
      this.selectedImageIndex += 1;
      this.storeIndex()
    },
    previousImage() {
      this.selectedImageIndex === 0 ?
      this.selectedImageIndex = (this.images.length - 1) :
      this.selectedImageIndex -= 1;
      this.storeIndex()
    },
    storeIndex() {
      sessionStorage.selectedImageIndex = this.selectedImageIndex
    },
    getIndex() {
      return parseInt(sessionStorage.selectedImageIndex, 10)
    }
  }
}
</script>

<style scoped>

/* PORTRAIT VERSION */

@media screen and (orientation: portrait) {
  .photo {
    height: 38vh
  }

  #video-navigator {
      top: 75vh;
  }
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {
  .photo {
    height: 75vh;
  }

  #video-navigator {
    top: 90vh;
  }
}

/* GENERAL */

.photo-outer {
  height: 75vh;
}

.photo {
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
  border: none;
  min-width: 30px
}

.nav-button:focus {
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