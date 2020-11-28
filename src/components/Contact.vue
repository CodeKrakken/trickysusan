<template>

<div id="contact">
  <div id="question">
    Wanna get in touch?<br><br>
    Hit us up on<br><br>
  </div>
  <div id="email">
    <a href="mailto:trickysusanband@gmail.com">trickysusanband@gmail.com</a>
  </div>
</div>
  
</template>

<style>

#contact {
    text-shadow: none;
    text-align: center;
    background: black;
    box-shadow: 5px 5px 5px black, 
              5px -5px 5px black,
              -5px -5px 5px black,
              -5px 5px 5px black;
}

@media screen and (orientation: portrait) {

  #question { 
    font-size: calc(14px + 1.5vh)
  }

}

@media screen and (orientation: landscape) {
    #question { 
    font-size: calc(10px + 1.5vw)
  }
}


#email { 
  font-size: calc(26px + 1.5vw) 
}

a {
  cursor: default;
  filter: brightness(70%);
  color: #E22076
}

a:hover {
  filter: brightness(85%);
  transition: all 0.2s ease
}
 
a:active {
  filter: brightness(100%);
  transition: all 0.1s ease;
}

a:focus {
  border: none;
  outline: none
}

</style>