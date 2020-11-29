<template>
  <div>
    <div id="navigator">
      <button @click="previousImage()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <div id="caption" />
      <button @click="nextImage()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>     
    <img :src="images[selectedImageIndex]" class="photo" />
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
    max-width: 100vw;
    /* max-height: 100vw; */
    max-height: 56.25vh;
  }

  #navigator {
    top: 16px;
    left: 15vh
  }

  .nav-button {
    width: 4vh;
    box-shadow: 3px 3px 3px black, 
            3px -3px 3px black,
            -3px -3px 3px black,
            -3px 3px 3px black;
  }
    
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {
  .photo {
    max-width: 75vw;
    max-height: 75vh
  }

  #navigator {
    top: 90vh;
    left: 0;
    right: 0;
  }

  .nav-button {
    width: 3vw;
    min-width: 40px;
    box-shadow: 5px 5px 5px black, 
            5px -5px 5px black,
            -5px -5px 5px black,
            -5px 5px 5px black;
  }

  #caption {
    font-size: 150%;
    background: transparent;
    width: 25vw;
    text-align: center;
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
 
#navigator {
  display: flex;
  position: absolute;
  justify-content: center;
  background: transparent;
  align-content: center;
  border: none
}

.nav-button {
  filter: brightness(50%);
  background: black;
  transition: all 0.1s ease;
  border: none;
  min-width: 40px
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

.icon { width: 100% }

</style>