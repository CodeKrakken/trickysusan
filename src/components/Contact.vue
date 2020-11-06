<template>

<div id="contact"> 
  <h2>Wanna get in touch?</h2>
  <h2>Hit us up on</h2>

  <div id="email">
    <a href="mailto:trickysusanband@gmail.com">trickysusanband@gmail.com</a>
  </div>
</div>
  
</template>

<style>

#email { font-size: 200%}

#contact {
    text-shadow: none;
    text-align: center;
    background: black;
    box-shadow: 5px 5px 5px black, 
              5px -5px 5px black,
              -5px -5px 5px black,
              -5px 5px 5px black;
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