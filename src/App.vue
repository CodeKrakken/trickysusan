<template>
  <div id="app">
    <Background />
    <Bandname />
    <Socials />

  </div>
</template>

<script>
import Background from '@/components/Background'
import Bandname from '@/components/Bandname'
import Socials from '@/components/Socials'

  export default {
    components: {
      Background,
      Bandname,
      Socials
    },
    data() {
      return {
        selectedTab: (sessionStorage.tab || 'News')
      }
    },   
    methods: {
      selectTab(tab) {
        this.selectedTab = tab
        sessionStorage.tab = tab
      }
    },
    
  }
</script>

<style>

</style>