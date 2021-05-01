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
      <div class="element">
        <img class="image" :src="press[selectedPressIndex].image" />
      </div>
      <br>
      <div class="element">
        <div id="review-link" v-html="press[selectedPressIndex].link" />
      </div>
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
          header: "Undercover",
          subheader: "(single, 2020)",
          link: '<a href="https://www.theothersidereviews.com/tricky-susan-undercover-2020/">Undercover Review<br>The Other Side Reviews, 28.12.20</a>'
        },
        {
          image: "/images/unrated-interview.webp",
          link: '<a href="https://www.unratedmag.com/tricky-susan/">Interview<br>Unrated Magazine, 26.02.21</a>'
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

  .element {
    height: 30vh;
    align-content: center;
    padding: 1vw
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

</style>