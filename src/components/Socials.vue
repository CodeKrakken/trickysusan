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
    top: 10px;
    left: 5px;
    flex-direction: column;
    background: black;
    z-index: 1;
    width: 3vw;
  }

}

/* PORTRAIT */

@media screen and (orientation: portrait) {

  #socials {
    flex-direction: row;
    background: black;
    z-index: 1;
    width: 150px;
    right: 7px;
    top: 10px;
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
    background: black;
    z-index: 1;

  }

  #social-image {
    width: 100%;

  }
  
  #social {
    width: 100%;
    filter: grayscale(100%);
    transition: all 0.1s ease;
    border: none;
    outline: none;
    background: black;
    box-shadow:  3px  3px 3px black, 
                 3px -3px 3px black, 
                -3px -3px 3px black, 
                -3px  3px 3px black;
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