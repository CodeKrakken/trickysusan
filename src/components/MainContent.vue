<template>
<div id="main-content">
  <div v-show="selectedTab === 'News'"><News /></div>
  <!-- <div v-show="selectedTab === 'Music'"><music /></div> -->
  <div v-show="selectedTab === 'Gigs'"><Gigs /></div>
  <div v-show="selectedTab === 'Bio'"><Bio /></div>
  <div v-show="selectedTab === 'Photos'"><Photos /></div>
  <div v-show="selectedTab === 'Videos'"><Videos /></div>
  <div v-show="selectedTab === 'Contact'"><Contact /></div>
  <!-- <div v-show="selectedTab === 'Shop'"><shop /></div>
  <div v-show="selectedTab === 'EPK'"><epk /></div> -->
</div>
</template>

<script>
import News from './News.vue'
import Gigs from './Gigs.vue'
import Bio from './Bio.vue'
import Photos from './Photos.vue'
import Videos from './Videos.vue'
import Contact from './Contact.vue'

export default {
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },
  components: {
    News,
    Gigs,
    Bio,
    Photos,
    Videos,
    Contact
  }
}
</script>

<style scoped>
@media screen and (orientation: portrait) {
  #main-content {
    /* transform: rotate(-90deg);
    transform-origin: left top; */
    width: 100vw
    /* height: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    top: 100%;
    left: 0;*/
  }
}
/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #main-content {
    padding-left: 15%;
    padding-right: 15%;
  }
}

/* GENERAL */

#main-content {
  text-align: justify;
  font-size: 150%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>