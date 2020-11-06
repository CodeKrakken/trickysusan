<template>
<div id="news">
  <div id="date">
    {{ posts[selectedPostIndex].date }}
  </div>
  <br>
  <div>
    <span v-html="posts[selectedPostIndex].post" />
  </div>
    <br><br>
  <div id="video-navigator">
    <button @click="previousPost()" class="nav-button">
      <img src="/images/previous-button.png" id="previous-icon" />
    </button>
    <div id="caption" />
    <button @click="nextPost()" class="nav-button">
      <img src="/images/next-button.png" id="next-icon" />
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
          date: '08.10.20',
          post: 'Word on the street Tricky Su are close to a single release....WHAAAATTTT?!!! WATCH THIS SPACE'
        },
        {
            date: '14.07.20',
            post: 'Let’s face it - COVID-19 continues to be a major prick. We’re working really hard to establish which venues will have us back as soon as possible, so we can provide the antidote to all this BS – a large and loud dose of Tricky Susan.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ...<br><br><div style="text-align: center"><h1>KA-POW.</h1></div>'
        },
      ],
      selectedPostIndex: (parseInt(sessionStorage.selectedPostIndex, 10) || 0)
    }
  },
  mounted() {
    // $.get("/news")
    // .then(response => (this.posts = response.reverse()))
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
    }
  }
}
</script>

<style scoped>

#news {
  width: 50vw;
  height: 50vh
}

#date {
  text-align: center;
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

.nav-button:focus, .button:focus, [type="submit"]:focus {
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

#next-icon { width: 100% }

#previous-icon { width: 100% }

#caption {
  font-size: 150%;
  background: transparent;
  width: 25%;
  text-align: center;
}

</style>