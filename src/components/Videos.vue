<template>
  <div id="videos">
    <div id="navigator">
      <button @click="previousVideo()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="nextVideo()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
    <div id="video-outer">
      <iframe
        :src="videos[selectedVideoIndex].address"
        frameborder="0"
        fullscreen="0"
        allow="accelerometer; 
              autoplay; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture" 
              allowfullscreen>
      </iframe>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          name: 'Undercover',
          address: "https://www.youtube.com/embed/ZZUYN2O9bdU?rel=0&modestbranding=1"
        },
        {
          name: "Strategy",
          address: "https://www.youtube.com/embed/exggrODRu4w?rel=0&modestbranding=1"
        },
        {
          name: "Tug of War",
          address: "https://www.youtube.com/embed/hm2jNxkG2ak?rel=0&modestbranding=1&start=4"
        },
        {
          name: "Come On Over (session)",
          address: "https://www.youtube.com/embed/X3lryMPttIY?rel=0&modestbranding=1"
        },
        {
          name: "Baby, I Do",
          address: "https://www.youtube.com/embed/qTJmtTHc31U?rel=0&modestbranding=1"
        }
      ],
      selectedVideoIndex: (this.getIndex() || 0)
    }
  },
  methods: {
    previousVideo() {
      this.selectedVideoIndex === 0 ?
      this.selectedVideoIndex = (this.videos.length - 1) :
      this.selectedVideoIndex -= 1
      this.storeIndex()
    },
    nextVideo() {
      this.selectedVideoIndex === (this.videos.length - 1) ?
      this.selectedVideoIndex = 0 :
      this.selectedVideoIndex += 1
      this.storeIndex()
    },
    storeIndex() {
      sessionStorage.selectedVideoIndex = this.selectedVideoIndex
    },
    getIndex() {
      return parseInt(sessionStorage.selectedVideoIndex)
    }
  }
}
</script>

<style scoped>

/* PORTRAIT VERSION */

@media screen and (orientation: portrait) {
  iframe {
    height: 32vh; 
    width: 100vw;
  }

  #navigator {
    top: 16px;
    left: 15vh
  }

  .nav-button {
    width: 4vh;
  }
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #navigator {
    top: calc(10px + 2vh);
    margin: auto auto
  }

  .nav-button {
    width: 3vw;
    min-width: 40px;
  }

  #video-outer {
    position: absolute;
    top: 12vh;
    bottom: 10px;
    width: 69vw
  }

  iframe {
    width: 100%;
    height: 100%
  }

}

/* GENERAL */

#videos {
  display: flex;
  flex-direction: column;
  align-items: center
}

#video-outer {
  box-shadow:  5px  5px 5px black,
               5px -5px 5px black, 
              -5px -5px 5px black, 
              -5px  5px 5px black;
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
  min-width: 40px;
  box-shadow: 3px 3px 3px black, 
        3px -3px 3px black,
        -3px -3px 3px black,
        -3px 3px 3px black;
}

.nav-button:hover {
  filter: brightness(75%);
  transition: all 0.2s ease;
}

.nav-button:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

.nav-button:focus {
   outline: none;
}

.icon { width: 100% }

</style>