<template>
  <div id="app" :class="{ invertColours: coloursAreInverted }" >
    <Background />
    <Bandname @toggle-colours="toggleColours" />
    <Socials />
    <MainContent :selectedTab="selectedTab" />
    <Tabs @select-tab="selectTab" />
  </div>
</template>

<script>
import Background from '@/components/Background'
import Bandname from '@/components/Bandname'
import Socials from '@/components/Socials'
import MainContent from '@/components/MainContent'
import Tabs from '@/components/Tabs.vue'

  export default {
    components: {
      Background,
      Bandname,
      Socials,
      MainContent,
      Tabs
    },
    data() {
      return {
        selectedTab: (sessionStorage.tab || 'Videos'),
        coloursAreInverted: (sessionStorage.coloursAreInverted || false )
      }
    },   
    methods: {
      selectTab(tab) {
        this.selectedTab = tab
        sessionStorage.tab = tab
      },
      toggleColours() {
        sessionStorage.coloursAreInverted = !sessionStorage.coloursAreInverted
        this.coloursAreInverted = !this.coloursAreInverted
      }
    },
    
  }
</script>

<style>

@viewport { 
  width: device-width;
  height: device-height
}

@font-face {
  font-family: 'Odibee Sans';
  src: url('assets/Odibee_Sans/OdibeeSans-Regular.ttf') format('truetype');
}

#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.invertColours {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: invert(100%)
}

body {
  background-color: black;
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  box-sizing: border-box;
  font-family: 'Odibee Sans';
  letter-spacing: 0.1em;
  cursor: default;
  text-shadow: 5px 5px 3px black, -5px -5px 3px black, 5px -5px 3px black, -5px 5px 3px black
}


</style>