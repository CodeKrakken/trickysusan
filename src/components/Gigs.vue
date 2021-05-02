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
          date: '29.05.21',
          venue: 'Amersham Arms, New Cross',
          link: 'https://www.eventbrite.co.uk/e/underground-sound-presents-amersham-arms-section-1-tickets-148005130329?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing'
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
  box-shadow:  10px  10px 10px black, 
              10px -10px 10px black, 
            -10px -10px 10px black, 
            -10px  10px 10px black
}

@media (hover: hover) {
  button:hover {
    filter: brightness(100%);
    transition: all 0.2s ease
  }
}




#gig-display {
  display: grid;
  grid-template-columns: 24% 62% 19%;
  grid-column-gap: 20px;
}

.grid-box {
  /* border: thin white dashed; */
  justify-content: center;
  display: flex;
  align-items: center
}

</style>