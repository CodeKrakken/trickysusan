Vue.config.devtools = true

$(document).ready(function(){

  $(document).on('click', '#add-news', function(){

    const formValues = $('form').serialize();
    
    $.post("/admin/add-news", formValues, function(data) {
      if (data === "Message Sent.") { 
        var form = document.getElementById('form');
        form.reset();
        $('form input').prop("disabled", true);
        $('form textarea').prop("disabled", true);
        $('form button').prop("disabled", true);
      };
      $("#message-conf").html(data);       
    })
  })

  $(document.on('click', 'delete-news', function() {

    $.delete("/admin/delete-news", post, function() {
      
    })
  }))

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
            <button id="delete-news" type="button">Delete</button>
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
    <div class="center">
    <h1 id="contact-header">Contact</h1>
    <form id="form" method="POST" action="/">
      <p><input class="contact-info" type="text" name="date" placeholder="date"  class="shadow-one"></p>
      <p><textarea id="message-box" name="post" rows="6" placeholder="What's the scoop, Betty Boop?" class="shadow-one"></textarea></p>
      <p><button id="add-news" type="button" class="shadow-one">Done</button></p>
      <div id="message-conf" />
    </form>
  </div>
    </form>
      </div>
    `,
    methods: {
      
    }
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