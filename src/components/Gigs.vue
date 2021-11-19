<template>
  <div id="gigs">
    <span v-for="(gig, index) in gigs" :key="index">
      <div id="gig-display">
        <span class="grid-box">{{ gig.date }}</span> 
        <span class="grid-box">{{ gig.venue }}</span>
        <span class="grid-box">
          <button @click="visit(gig.link)">
            TICKETS
          </button>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gigs: [
        {
          date: '08.12.21',
          venue: 'Hoxton Underbelly',
          link: 'https://bit.ly/3ADWGje'
        }
      ]
    }
  },
  methods: {
    visit(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>

@font-face {
  font-family: 'Odibee Sans';
  src: url('../assets/Odibee_Sans/OdibeeSans-Regular.ttf') format('truetype');
}

button {
  font-family: 'Odibee Sans';
  font-size: 100%;
  background: black;
  color: #E22076;
  filter: brightness(50%);
  transition: all 0.2s ease;
  box-shadow:  5px  5px 5px black, 
              5px -5px 5px black, 
            -5px -5px 5px black, 
            -5px  5px 5px black;
  margin: 5px
}

@media (hover: hover) {
  button:hover {
    filter: brightness(100%);
    transition: all 0.2s ease
  }
}

@media screen and (orientation: landscape) {
  #gig-display {
    display: grid;
    grid-template-columns: 24% 62% 19%;
    grid-column-gap: 20px;
  }
}

.grid-box {
  /* border: thin white dashed; */
  justify-content: center;
  display: flex;
  align-items: center
}

</style>