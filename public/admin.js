Vue.config.devtools = true

$(document).ready(function(){

  Vue.component ('background', {
    template: `
      <div>
        <div id="background">
      </div>
    `
  })

  Vue.component('list-news', {
    template: `
      <div>
        <div v-for="post in posts">
          <span id="admin-news-preview">
            {{ moment(post.date).format('DD.MM.YY') }} ... {{ post.post }}        
          </span>
          <div style="font-size:150%">
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

  Vue.component('add-news', {
    template: `
      <div>
        <form @click="submitForm">
          <input 
            type="text" 
            class="form-control" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
          <button class="btn btn-success">Add</button>
        </form>
      </div>
    `
  })

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        <background />
        <band-name />
        <list-news />
        <add-news />
      </div>
    `  
  })
})