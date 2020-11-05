<template>

  <div id="socials">

    <!-- <span v-for="(social, index) in socials" :key="index">
      <a :href="social.link" target="_blank" >
        <img src=social.image id="social" class="shadow-one">
      </a> 
    </span> -->

    <a href="https://www.instagram.com/trickysusan/?hl=en" target="_blank" >
      <img src="/images/instagram hover.png" id="social" />
    </a>

    <a href="https://www.facebook.com/TrickySusan" target="_blank" >
      <img src="/images/facebook hover.png" id="social" />
    </a>

    <a href="https://www.youtube.com/user/youronewayticket" target="_blank" >
      <img src="/images/youtube.png" id="social" />
    </a>

  </div>

  <!-- <div id="socials">
    
  </div> -->
  
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          image: '../assets/images/instagram hover.png',
          link: 'https://www.instagram.com/trickysusan/?hl=en'
        },
        {
          image: '../assets/images/facebook hover.png',
          link: 'https://www.facebook.com/TrickySusan'
        },
        {
          image: '../assets/images/youtube.png',
          link: 'https://www.youtube.com/user/youronewayticket'
        }
      ]
    }
  }
}
</script>

<style scoped>

  #socials {
    position: absolute;
    top: 30%;
    bottom: 30%;
    right: 0;
    width: 8%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    background: transparent;
    z-index: 1
  }

  #social {
    width: 3vw;
    filter: grayscale(100%);
    text-align: left;
    background: black;
    box-shadow: 15px 15px 15px black, 
               15px -15px 15px black, 
              -15px -15px 15px black, 
               -15px 15px 15px black 
  }

  #social:hover {
    filter: grayscale(0%);
    filter: brightness(75%);
  }

  #social:active {
    filter: grayscale(0%);
    filter: brightness(100%);
    transition: all 0.2s ease;
  }

</style>