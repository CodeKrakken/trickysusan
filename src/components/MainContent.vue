<template>
<div id="main-content">
  <div v-show="selectedTab === 'News'"><news /></div>
  <!-- <div v-show="selectedTab === 'Music'"><music /></div>
  <div v-show="selectedTab === 'Gigs'"><gigs /></div>
  <div v-show="selectedTab === 'Shop'"><shop /></div>
  <div v-show="selectedTab === 'Bio'"><bio /></div>
  <div v-show="selectedTab === 'Photos'"><photos /></div>
  <div v-show="selectedTab === 'Videos'"><videos /></div>
  <div v-show="selectedTab === 'Contact'"><contact /></div>
  <div v-show="selectedTab === 'EPK'"><epk /></div> -->
</div>
</template>

<script>
export default {
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#main-content {
  text-align: justify;
  font-size: 150%;
  padding-left: 15%;
  padding-right: 15%;
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