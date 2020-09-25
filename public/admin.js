Vue.config.devtools = true

$(document).ready(function(){

  Vue.component ('background', {
    template: `
      <div>
        <div id="background">
      </div>
    `
  })

  Vue.component('news', {
    template: `
      <div>
        <div v-for="post in posts">
          {{ post.date }} ... {{ post.post }}
        </div>
      </div>
    `,
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      $.get("/news")
      .then(response => (this.posts = response.reverse()))
    }
  })

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        <background />
        <band-name />
        <news />
      </div>
    `  
  })
})