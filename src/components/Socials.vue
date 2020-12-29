<template>
  <div id="socials">
    <button 
      v-for="(social, index) in socials" 
      :key="index"
      @click="visit(social.link)"
      target="_blank"
      id="social"
    >
      <img :src="social.image" id="social-image">
    </button> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          image: '/images/instagram hover.png',
          link: 'https://www.instagram.com/trickysusan/?hl=en'
        },
        {
          image: '/images/youtube.png',
          link: 'https://www.youtube.com/user/youronewayticket'
        },
        {
          image: '/images/facebook hover.png',
          link: 'https://www.facebook.com/TrickySusan'
        },
        {
          image: '/images/email.png',
          link: 'mailto:trickysusanband@gmail.com'
        }
      ]
    }
  },
  methods: {
    visit(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>

/* LANDSCAPE */

@media screen and (orientation: landscape) {

  #socials {
    top: 30%;
    bottom: 30%;
    right: 5vw;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 1;
    width: 50px
  }

}

/* PORTRAIT */

@media screen and (orientation: portrait) {

  #socials {
    flex-direction: row;
    z-index: 1;
    width: 120px;
    height: 40px;
    top: 5px;
    right: 5px;
    /* border: thin white dashed */
  }

}

  /* GENERAL */

  @viewport { 
    width: device-width;
    height: device-height
  }

  #socials {
    position: fixed;
    display: flex;
    background: transparent;
    z-index: 1;
  }

  #social-image {
    width: 100%;
    max-width: 40px;
    background: black;
    box-shadow:  3px  3px 3px black, 
              3px -3px 3px black, 
            -3px -3px 3px black, 
            -3px  3px 3px black;
    /* border: thin white dashed */
  }
  
  #social {
    height: 100%;
    max-height: 40px;
    filter: grayscale(100%);
    transition: all 0.1s ease;
    border: none;
    outline: none;
    background: transparent;
    /* border: thin white dashed */
  }

  #social:hover {
    filter: grayscale(0%);
    filter: brightness(75%);
    transition: all 0.2s ease;
  }

  #social:active {
    filter: grayscale(0%);
    filter: brightness(100%);
    transition: all 0.2s ease;
  }

  #social:focus {
    filter: brightness(75%);
    transition: all 0.2s ease;
  }

</style>