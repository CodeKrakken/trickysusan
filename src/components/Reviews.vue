<template>
  <div>
    <div id="release-row">
      <div class="element">
        <img src="/images/Undercover cover.jpg" />
      </div>
      <div class="element">
        <div id="release-header">
          Undercover
        </div>
        <div id="release-details">
          (single, 2020)
        </div>
        <br>
        <div id="review-link">
          <a href="https://www.theothersidereviews.com/tricky-susan-undercover-2020/">The Other Side Reviews, 28-12-20</a>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>

  @media screen and ( orientation: landscape ) {
    #release-row {
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and ( orientation: portrait ) {
    #release-row {
      display: flex;
      flex-direction: column;
      text-align: center
    }
  }

  #release-header {
    font-size: calc(42px + 1.5vw)
  }

  #release-details {
    font-size: calc(20px);
    font-style: italic
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

  a:link {
    color: #00aeef
  }

  a:visited {
    color: #E22076
  }

</style>