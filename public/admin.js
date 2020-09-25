Vue.config.devtools = true

$(document).ready(function(){

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        Howdy! I am working just fine.
      </div>
    `  
  })
})