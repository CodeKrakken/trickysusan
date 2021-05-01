<template>
  <div id="videos">
    <div id="navigator">
      <button @click="previous()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="next()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
    <div id="video-outer">
      <button id="link" @click="visit(press[selectedPressIndex].link)">
        <img class="image" :src="press[selectedPressIndex].image" />
      </button>
      <br><br>
      <div v-html="press[selectedPressIndex].description" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      press: [
        {
          image: "/images/Undercover cover.jpg",
          link: 'https://www.theothersidereviews.com/tricky-susan-undercover-2020/',
          description: 'Undercover review<br>The Other Side Reviews<br>28.12.20'
        },
        {
          image: "/images/unrated-interview.webp",
          link: 'https://www.unratedmag.com/tricky-susan/',
          description: 'Interview<br>Unrated Magazine<br>26.02.20'
        }
      ],
      selectedPressIndex: this.getIndex() || 0,
      videos: [
        {
          name: 'Grab',
          address: "https://www.youtube.com/embed/9_Tnuuq7exI?rel=0&modestbranding=1"
        },
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
    next() {
      this.selectedPressIndex === (this.press.length - 1) ?
      this.selectedPressIndex = 0 :
      this.selectedPressIndex += 1;
      this.storeIndex()
    },
    previous() {
      this.selectedPressIndex === 0 ?
      this.selectedPressIndex = (this.press.length - 1) :
      this.selectedPressIndex -= 1;
      this.storeIndex()
    },
    storeIndex() {
      sessionStorage.selectedPressIndex = this.selectedPressIndex
    },
    getIndex() {
      return parseInt(sessionStorage.selectedPressIndex)
    },
    visit(link) {
      window.open(link, '_blank');
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
    top: 10px;
    margin: auto auto
  }
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #navigator {
    top: calc(10px + 2vh);
    margin: auto auto
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

.image {
  height: 30vh;
  box-shadow:  10px  10px 10px black, 
              10px -10px 10px black, 
            -10px -10px 10px black, 
            -10px  10px 10px black
}

#link:hover {
  filter: invert();
  transition: all 0.2s ease;
}

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

.nav-button:focus {
  filter: brightness(50%);
  outline: none;
}

.nav-button {
  filter: brightness(50%);
  background: black;
  transition: all 0.1s ease;
  border: none;
  min-width: 40px;
  width: 3vw;
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

.icon { width: 100% }

</style>