<template>

  <div id="socials">
    <span v-for="(social, index) in socials" :key="index">
      <a :href="social.link" target="_blank" >
        <img v-bind:src="social.image" id="social" class="shadow-one">
      </a> 
    </span>
  </div>
  
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
          image: './facebook hover.png',
          link: 'https://www.facebook.com/TrickySusan'
        },
        {
          image: './youtube.png',
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

</style>