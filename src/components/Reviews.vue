<template>
  <div>
    <div id="release-row">
      <div class="element">
        <img src="/images/Undercover cover.jpg" />
      </div>
      <div class="element">
        <h1>Undercover (single, 2020)</h1>
        <a href="https://www.theothersidereviews.com/tricky-susan-undercover-2020/">The Other Side Reviews, 28-12-20</a>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>

  #release-row {
    display: flex;
    flex-direction: row;
  }

  .text {
    text-align: justify
  }

  .element {
    height: 30vh;
    align-content: center;
    padding: 1vw
  }

  img {
    height: 30vh;
    box-shadow:  10px  10px 10px black, 
               10px -10px 10px black, 
              -10px -10px 10px black, 
              -10px  10px 10px black
  }

  a {
    text-decoration: none
  }

</style>