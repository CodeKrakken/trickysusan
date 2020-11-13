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
          image: '/images/facebook hover.png',
          link: 'https://www.facebook.com/TrickySusan'
        },
        {
          image: '/images/youtube.png',
          link: 'https://www.youtube.com/user/youronewayticket'
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

/* COMPUTER VERSION */

@media screen and (orientation: landscape) {

    #socials {
    position: absolute;
    top: 30%;
    bottom: 30%;
    right: 5vw;
    width: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: black;
    z-index: 1
  }

  #social {
    box-shadow: 15px 15px 15px black, 
               15px -15px 15px black, 
              -15px -15px 15px black, 
               -15px 15px 15px black;
  }

  #social-image {
    width: 50px;
  }

}

/* MOBILE VERSION */

@media screen and (orientation: portrait) {

    #socials {
    position: absolute;
    top: 1vw;
    right: 1vw;
    /* right: 30%; */
    /* top: 5vw; */
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: black;
    z-index: 1
  }

  #social {
    box-shadow: 5px 5px 5px black, 
               5px -5px 5px black, 
              -5px -5px 5px black, 
               -5px 5px 5px black;
  }

  #social-image {
    width: 30px;
    min-width: 19px;
  }

}

  /* GENERAL */

  @viewport { 
    width: device-width;
    height: device-height
  }
  
  #social {
    width: 50px;
    filter: grayscale(100%);
    transition: all 0.1s ease;
    border: none;
    outline: none;
    background: black
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

</style>