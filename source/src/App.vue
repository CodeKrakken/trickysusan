<template>
  <div id="app">
    Hello!
    <background />
    <band-name />
    <socials />
    <main-content :selectedTab="selectedTab" />
    <tabs @select-tab="selectTab" />
  </div>
</template>

<script>
  export default {
    components: {
      SiteNav
    },
    computed: {
      ...mapState(['userProfile']),
      showNav() {
        return Object.keys(this.userProfile).length > 1
      }
    }
  }
</script>

<style>

</style>