<template>
  <div>
    <div id="navigator">
      <button @click="previousPost()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="nextPost()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
    <div id="release-row">
      <div class="element">
        <img class="image" :src="press[selectedPressIndex].image" />
      </div>
      <div class="element">
        <div id="release-header">
          {{ press[selectedPressIndex].header }}
        </div>
        <div id="release-details">
          {{ press[selectedPressIndex].subheader }}
        </div>
        <br>
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
          link: '<a href="https://www.theothersidereviews.com/tricky-susan-undercover-2020/">The Other Side Reviews, 28-12-20</a>'
        },
        {
          image: "/images/Undercover cover.jpg",
          header: "A wagging bum",
          aubheader: "bum, wagged 2021",
          link: '<a href="https://www.unratedmag.com/tricky-susan/">Unrated Magazine</a>'
        }
      ],
      selectedPressIndex: this.getIndex() || 0
    }
  },
  methods: {
    getIndex() {
      return parseInt(sessionStorage.selectedPressIndex, 10)
    }
  }
}
</script>

<style scoped>

  @media screen and ( orientation: landscape ) {
    #release-row {
      display: flex;
      flex-direction: row;
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