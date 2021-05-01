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
    <div id="release-row">
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
      return parseInt(sessionStorage.selectedPressIndex, 10)
    },
    visit(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>

  @media screen and ( orientation: landscape ) {

    #press {
      width: 69vw;
      height: 50vh;
      font-size:calc(6px + 1.5vw);
    }

    #release-row {
      text-align: center
      /* display: grid; */
    }

    #navigator {
      top: calc(10px + 2vh);
      margin: auto auto
    }

    .nav-button {
      width: 3vw;
      min-width: 40px;
    }

  }

  @media screen and ( orientation: portrait ) {

    #press {
      width: 90vw;
      height: 80vh;
      font-size:calc(10px + 1.5vh);
    }

    #release-row {
      display: flex;
      flex-direction: column;
      text-align: center
    }

    #navigator {
      top: 10px;
      margin: auto auto
    }

    .nav-button {
      height: 4vh;
    }
  }

  #press {
    display: flex;
    flex-direction: column;
    align-items: center
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

  #navigator {
    display: flex;
    position: absolute;
    justify-content: center;
    background: transparent;
    align-content: center;
    border: none;
  }

  .icon { width: 100% }

  #release-header {
    font-size: calc(42px + 1.5vw)
  }

  #release-details {
    font-size: calc(20px);
    font-style: italic
  }

  .text {
    text-align: justify
  }

  .image {
    height: 30vh;
    box-shadow:  10px  10px 10px black, 
               10px -10px 10px black, 
              -10px -10px 10px black, 
              -10px  10px 10px black
  }

  a {
    text-decoration: none
  }

  a:link {
    color: #00aeef
  }

  a:visited {
    color: #E22076
  }

  #link:hover {
    filter: invert();
    transition: all 0.2s ease;
  }
  
</style>