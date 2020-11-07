<template>
  <div>
    <div id="video">
      <span v-html="videos[selectedVideoIndex].address" />
    </div>
    <div id="video-navigator">
      <button @click="previousVideo()" class="nav-button">
        <img src="/images/previous-button.png" id="previous-icon" />
      </button>
      <div id="caption" />
      <button @click="nextVideo()" class="nav-button">
        <img src="/images/next-button.png" id="next-icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          name: "Strategy",
          address: '<iframe src="https://www.youtube.com/embed/exggrODRu4w?rel=0&modestbranding=1" \
                    frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'
        },
        {
          name: "Tug of War",
          address: '<iframe src="https://www.youtube.com/embed/hm2jNxkG2ak?rel=0&modestbranding=1&start=4" \
                    frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'
        },
        {
          name: "Come On Over (session)",
          address: '<iframe src="https://www.youtube.com/embed/X3lryMPttIY?rel=0&modestbranding=1" \
                    frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'
        },
        {
          name: "Baby, I Do",
          address: '<iframe src="https://www.youtube.com/embed/qTJmtTHc31U?rel=0&modestbranding=1" \
                    frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'
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

#video {
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

#previous-icon { width: 100% }

#next-icon { width: 100% }

#caption {
  font-size: 150%;
  background: transparent;
  width: 25%;
  text-align: center;
}

</style>