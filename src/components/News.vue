<template>
  <div id="news">
    <div id="date">
      {{ posts[selectedPostIndex].date }}
      <br><br>
    </div>
    <div>
      <span v-html="posts[selectedPostIndex].post" />
    </div>
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
          date: '04.03.21',
          post: 'Well well well ... check out our interview with Unrated Magazine ... <br><br><a href="https://www.unratedmag.com/tricky-susan/"><h1 style="text-align: center">HERE.</h1></a>'        },
        {
          date: '01.01.21',
          post: 'Well there we have it: the end of the year that stopped the world in its tracks. 2020, we shan’t miss you. We’re gagging to grace the stage again - and when 2021 permits, we’ll be there. Come find us when we do.<br><br>Meanwhile, head over to Reviews for The Other Side Reviews\' thoughts on our latest single, Undercover.<br><br>Keep your chins up. And your pants preferably.<br><br>Here’s to you achieving your dreams in a year which allows it. Cheers to you, from us. Happy New Year!<br><br><br><div style="text-align: center">Tricky Susan</div>'
        },
        {
          date: '24.11.20',
          post: 'Our new video, UNDERCOVER, is out now! Shimmy on over to the Videos page to watch.<br><br>Our music is now available to stream across Amazon, Anghami, Apple Music, MediaNet, Deezer, Instagram/Facebook, Google Play, iHeartRadio, ClaroMusica, iTunes, KKBox, Napster, NetEase, Pandora, Saavn, Shazam, Spotify, Tidal, TikTok and Soundtrack By Twitch.'
        },
        {
          date: '08.10.20',
          post: 'Word on the street Tricky Su are close to a single release....WHAAAATTTT?!!! WATCH THIS SPACE'
        },
        {
            date: '14.07.20',
            post: 'Let’s face it - COVID-19 continues to be a major prick. We’re working really hard to establish which venues will have us back as soon as possible, so we can provide the antidote to all this BS – a large and loud dose of Tricky Susan.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ...<br><br><div style="text-align: center"><h1>KA-POW.</h1></div>'
        },
      ],
      selectedPostIndex: (this.getIndex() || 0)
    }
  },
  mounted() {
    // fetch("http://trickysusan.herokuapp.com/news")
    // .then(response => (this.posts = response))
    // .then(console.log(this.posts))
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

@media screen and (orientation: portrait) {

  #news {
    width: 90vw;
    height: 80vh;
    font-size:calc(10px + 1.5vh);
  }

  #date {
    min-width: 12vh;
    max-width: 12vh;
  }

  .nav-button {
    height: 4vh;
  }

  #navigator {
    top: 10px;
    margin: auto auto
  }

  #break {
    display: none
  }

}

@media screen and (orientation: landscape) {
  
  #news {
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

#news {
  display: flex;
  flex-direction: column;
  align-items: center
}

#date {
  height: fit-content;
  text-align: center;
  /* display: inline */
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