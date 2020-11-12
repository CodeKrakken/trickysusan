<template>
  <div id="tabs">
    <span
    v-for="(tab, index) in tabs"
    :key="index"
    ><button @click="selectTab(tab)" class="tab" :id="tab">{{ tab }}</button></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        'News',
        'Gigs',
        'Bio',
        'Photos',
        'Videos',
        'Contact',
      ],
    }
  },
  methods: {
    selectTab(tab) {
      this.$emit('select-tab', tab)
    }
  }
}
</script>

<style scoped>

/* COMPUTER VERSION */

@media only screen and (min-width: 800px) {

  #tabs {
    position: absolute;
    top: 25%;
    bottom: 25%;
    width: 7%;
    flex-direction: column;
    text-align: right;
    display: flex;
    justify-content: space-between;
  }

  .tab {
    font-size: 200%;
  }
}

/* MOBILE VERSION */

@media only screen and (max-width: 800px) {
  
  #tabs {
    position: absolute;
    bottom: 1vh;
  }

  .tab {
    font-size: 150%
  }
}

/* GENERAL */

#tabs {
  position: absolute;
  background: transparent;
}

.tab {
  filter: brightness(50%);
  background: black;
  font-style: italic;
  background: transparent;
  color: rgb(0, 174, 239);
  transition: all 0.1s ease;
  border: none;
  text-shadow: 5px 5px 3px black, 
             -5px -5px 3px black, 
              5px -5px 3px black, 
              -5px 5px 3px black;
  font-family: 'Odibee Sans';
  letter-spacing: 0.1em;
}

.tab:hover {
  filter: brightness(75%);
  transition: all 0.2s ease;
}

.tab:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

.tab:focus { outline: none; }

</style>