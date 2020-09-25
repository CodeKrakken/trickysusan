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
          <div style="font-size:150%">
            {{ moment(post.date).format('DD.MM.YY') }} ... {{ post.post }}
            <br><br>
          </div>
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