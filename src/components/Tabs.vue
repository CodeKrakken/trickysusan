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

/* LANDSCAPE VERSION */

@media screen and (orientation: landscape) {

  #tabs {
    top: 25%;
    bottom: 25%;
    width: 9%;
    flex-direction: column;
    text-align: right;
    display: flex;
    justify-content: space-between;
  }


}
/* PORTRAIT VERSION */

@media screen and (orientation: portrait) {
  
  #tabs {
    bottom: 2vh;
    display: grid;
    grid-template-columns: repeat(3,33vw); 
    grid-template-rows: repeat(2,5vh);
    text-align: center
  }

}

/* GENERAL */

@viewport { 
  width: device-width;
  height: device-height
}

#tabs {
  position: absolute;
  background: transparent;
}

.tab {
  filter: brightness(50%);
  background: black;
  font-style: italic;
  background: transparent;
  color: #E22076;
  transition: all 0.1s ease;
  border: none;
  text-shadow: 5px 5px 3px black, 
             -5px -5px 3px black, 
              5px -5px 3px black, 
              -5px 5px 3px black;
  font-family: 'Odibee Sans';
  letter-spacing: 0.1em;
  font-size: 4vh
}

.tab:hover {
  filter: brightness(75%);
  transition: all 0.2s ease;
}

.tab:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

.tab:focus { 
  outline: none;
  /* filter: brightness(50%) */
}

</style>