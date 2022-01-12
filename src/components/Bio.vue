<template>
  <div id="bio">
    London-based five-piece band Tricky Susan immediately snatch your attention with their hook centric melodies and hard-hitting energy. Their punk-pop intertwined with dreamy layers are topped off by their unapologetic stage presence and their penchant for a stonking good time.   
    <br><br>
    The band are wildly excited to be marching into a post-lockdown world in 2022 and will be appearing at the infamous Dublin Castle [4th February 2022] and 229 London [5th March 2022].
    <br><br>
    If you want a night out to remind you why London still houses the best new indie music in the globe, you need to catch a glimpse of these puppies in action. You won’t regret it.
    <br><br><br>
    <div id="quotes">
      "... I’ve seen deaf people cry at a Tricky Susan show ..."<br><br>
      "... I’ve even seen a goose take a bump at one of their shows ..."
    </div>
  </div>

  

  
</template>

<style scoped>

@media screen and (orientation: landscape) {
  #bio {
    width: 50vw;
    height: 50vh;
    font-size:calc(6px + 1.5vw);
    align-items: center;
    display: flex;
    text-align: justify
  }

  #quotes {
    font-size: 70%;
    font-style: italic;
    position: absolute;
    top: 80%;
    left: 0;
    right: 0;
    bottom: 1vh;
    text-align: center
  }

}

@media screen and (orientation: portrait) {
  #bio {
    width: 80vw;
    height: 70vh;
    font-size:calc(10px + 1.5vh);
  }

  #quotes {
    font-size: 90%;
    font-style: italic;
    /* text-align: center; */
    /* width: 65vw; */
  }
}
</style>