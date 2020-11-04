<template>
  <div id="app">
    <Background />
    <Bandname />
    <Socials />
    <MainContent :selectedTab="selectedTab" />

  </div>
</template>

<script>
import Background from '@/components/Background'
import Bandname from '@/components/Bandname'
import Socials from '@/components/Socials'
import MainContent from '@/components/MainContent'

  export default {
    components: {
      Background,
      Bandname,
      Socials,
      MainContent
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