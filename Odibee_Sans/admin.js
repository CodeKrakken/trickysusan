Vue.config.devtools = true

$(document).ready(function() {

  Vue.component('tabs', {
    template: `
      <div>
        Bumwag
      </div>
    `
  })

  var app = new Vue({
    el: '#admin',
    template: `
      <div>
        <tabs />
      </div>
    `,
  })
})