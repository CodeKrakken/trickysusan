<template>
  <div id="press">
    <div id="navigator">
      <button @click="previous()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="next()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
    <div id="press-item">
      <img value="submit" class="image" :src="press[selectedPressIndex].image" @click="visit(press[selectedPressIndex].link)"/>
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
          image: "/images/roadie-music.jpg",
          link: 'https://roadie-music.com/tricky-susan-grab-e-um-brit-indie-rock-sobre-amor-nao-correspondido/',
          description: 'Grab review<br>Roadie Music<br>22.06.21'
        },
        {
          image: "/images/unrated-interview.webp",
          link: 'https://www.unratedmag.com/tricky-susan/',
          description: 'Interview<br>Unrated Magazine<br>26.02.20'
        },
        {
          image: "/images/Undercover cover.jpg",
          link: 'https://www.theothersidereviews.com/tricky-susan-undercover-2020/',
          description: 'Undercover review<br>The Other Side Reviews<br>28.12.20'
        }
      ],
      selectedPressIndex: this.getIndex() || 0
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

  #navigator {
    top: 10px;
  }

  .nav-button {
    height: 4vh;
  }
}

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #navigator {
    top: calc(10px + 2vh);
  }

}

@media (hover: none) {
  @keyframes glowing {
    0% {
      filter: brightness(50%)
    }
    50% {
      filter: brightness(100%)
    }
    100% {
      filter: brightness(50%)
    }
  }
  .image {
    animation: glowing 1300ms infinite;
  }
}

/* GENERAL */

button {
  border: none;
  outline: none;
  background: black;
}

.image {
  height: 30vh;
  transition: all 0.2s ease;
  box-shadow:  10px  10px 10px black, 
              10px -10px 10px black, 
            -10px -10px 10px black, 
            -10px  10px 10px black
}

#press {
  display: flex;
  flex-direction: column;
  align-items: center
}

#press-item {
  box-shadow:  5px  5px 5px black,
               5px -5px 5px black, 
              -5px -5px 5px black, 
              -5px  5px 5px black;
  text-align: center;
  width: 50vw
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

@media (hover: hover) {
  .nav-button:hover {
    filter: brightness(75%);
    transition: all 0.2s ease;
  }

  .image:hover {
    filter: invert();
    transition: all 0.2s ease;
  }
}

.nav-button:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

.icon { width: 100% }

</style>