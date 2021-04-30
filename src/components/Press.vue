<template>
  <div id="press">
    <span v-html="posts[selectedPostIndex].content" />
    <div id="navigator">
      <button @click="previousPost()" class="nav-button">
        <img src="/images/previous-button.png" class="icon" />
      </button>
      <button @click="nextPost()" class="nav-button">
        <img src="/images/next-button.png" class="icon" />
      </button>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          content: '<div id="release-row"><div style="height: 30vh; align-content: center; padding: 1vw"><img class="cover" src="/images/Undercover cover.jpg" /></div><div class="element"><div id="release-header">Undercover</div><div id="release-details">(single, 2020)</div><br><div id="review-link"><a href="https://www.theothersidereviews.com/tricky-susan-undercover-2020/">The Other Side Reviews, 28-12-20</a></div></div></div>'
        }
      ],
      selectedPostIndex: (this.getIndex() || 0)
    }
  },
  methods: {
    nextPost() {
      this.selectedPostIndex === (this.posts.length - 1) ?
      this.selectedPostIndex = 0 :
      this.selectedPostIndex += 1;
      this.storeIndex()
    },
    previousPost() {
      this.selectedPostIndex === 0 ?
      this.selectedPostIndex = (this.posts.length - 1) :
      this.selectedPostIndex -= 1;
      this.storeIndex()
    },
    storeIndex() {
      sessionStorage.selectedPostIndex = this.selectedPostIndex
    },
    getIndex() {
      return parseInt(sessionStorage.selectedPostIndex, 10)
    }
  }
}
</script>

<style scoped>

  @media screen and ( orientation: portrait ) {

    #release-row {
      display: flex;
      flex-direction: column;
      text-align: center
    }

    #press {
      width: 90vw;
      height: 80vh;
      font-size:calc(10px + 1.5vh);
    }

    .nav-button {
      height: 4vh;
    }

    #navigator {
      top: 10px;
      margin: auto auto
    }
  }

  @media screen and ( orientation: landscape ) {

    #release-row {
      display: flex;
      flex-direction: row;
    }

    #press {
      width: 69vw;
      height: 50vh;
      font-size:calc(6px + 1.5vw);
    }

    .nav-button {
      width: 3vw;
      min-width: 40px;
    }

    #navigator {
      top: calc(10px + 2vh);
      margin: auto auto
    }
  }

  #navigator {
    display: flex;
    position: absolute;
    justify-content: center;
    background: transparent;
    align-content: center;
    border: none;
  }

  #press {
    display: flex;
    flex-direction: column;
    align-items: center
  }

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

  .cover {
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