<template>
  <div id="photos">
    <div id="navigator">
      <button @click="previousImage()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="nextImage()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
    <div id="photo-outer">
      <img :src="images[selectedImageIndex]" id="photo-inner" />
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
  #photo-inner {
    max-width: 100vw;
    max-height: 56.25vh;
  }

  #navigator {
    top: 10px;
    margin: auto auto
  }

  .nav-button {
    width: 4vh;
  }
    
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #photos {
    width: 50vw;
    height: 50vh;
  }

  .nav-button {
    width: 3vw;
    min-width: 40px;
  }

  #navigator {
    top: calc(10px + 2vh);
    margin: auto auto
  }

  #photo-outer {
    position: absolute;
    bottom: 10px;
    top: 12vh;
    max-width: 69vw
  }

  #photo-inner {
    height: 100%
  }

}

/* GENERAL */

#photos {
  display: flex;
  flex-direction: column;
  align-items: center
}

#photo {
  box-shadow:  10px  10px 10px black, 
               10px -10px 10px black, 
              -10px -10px 10px black, 
              -10px  10px 10px black
}
 
#navigator {
  display: flex;
  justify-content: center;
  background: transparent;
  align-content: center;
  border: none;
  position: absolute;
}

.nav-button {
  filter: brightness(50%);
  background: black;
  transition: all 0.1s ease;
  border: none;
  min-width: 40px;
  box-shadow: 3px  3px 3px black, 
                3px -3px 3px black,
               -3px -3px 3px black,
               -3px  3px 3px black;
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