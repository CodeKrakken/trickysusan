<template>
<div id="main-content">
  <div v-show="selectedTab === 'News'"><News /></div>
  <!-- <div v-show="selectedTab === 'Music'"><music /></div> -->
  <div v-show="selectedTab === 'Gigs'"><Gigs /></div>
  <div v-show="selectedTab === 'Bio'"><Bio /></div>
  <div v-show="selectedTab === 'Photos'"><Photos /></div>
  <div v-show="selectedTab === 'Videos'"><Videos /></div>
  <div v-show="selectedTab === 'Press'"><Press /></div>
  <!-- <div v-show="selectedTab === 'Contact'"><Contact /></div>
  <div v-show="selectedTab === 'Shop'"><shop /></div>
  <div v-show="selectedTab === 'EPK'"><epk /></div> -->
</div>
</template>

<script>
import News from './News.vue'
import Gigs from './Gigs.vue'
import Bio from './Bio.vue'
import Photos from './Photos.vue'
import Videos from './Videos.vue'
import Press from './Press.vue'

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
    Press
  }
}
</script>

<style scoped>

@media screen and (orientation: portrait) {

  #main-content {
    width: 100vw;
  }

}

#main-content {
  text-align: justify;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>