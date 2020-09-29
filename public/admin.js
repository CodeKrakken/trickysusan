Vue.config.devtools = true

$(document).ready(function(){

  Vue.component('login-form', {
    template: `
      <div>
        <h1>Log In</h1>
        <input type="text" name="username" v-model="input.username" placeholder="username" />
        <input type="password" name="password" v-model="input.password" placeholder="password" />
        <button type="button" v-on:click="login()">Login</button>
      </div>
    `,
    data() {
      return {
        input: {
          username: "",
          password: ""
        },
        users: []
      }
    },
    mounted() {
      $.get("/users")
      .then(response => (this.users = response))
    },
    methods: {
      login() {
        if (this.input.username && this.input.password) {

          if(this.input.username === this.users[0].username && this.input.password === this.users[0].password) {
            this.$emit("log-in", true);
            // this.$router.replace({ name: "secure" });
          } else {
            console.log("The username and / or password is incorrect");
          }
        } else {
          console.log("A username and password must be present");
        }
      }
    }
  })

  Vue.component('list-news', {
    template: `
      <div>
        <div 
          v-for="post in posts"
          key={post.post_id}
        >
          <span id="admin-news-preview">
            {{ moment(post.date).format('DD.MM.YY') }} ... {{ post.post }}
          </span>
          <button id="delete-news-button" @click="deleteNews(post.post_id)" type="button">Delete</button>
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
    },
    beforeUpdate() {
      $.get("/news")
      .then(response => (this.posts = response.reverse()))
    },
    methods: {
      deleteNews: async (post_id) => {
        try {
          await fetch(`/admin/delete-news/${post_id}`, {
            method: "DELETE"
          });
        } catch (err) {
          console.error(err.message)
        }
      }
    }
  })

  Vue.component('add-news', {
    template: `
      <div>
        <form id="add-news" method="POST" action="/">
          <h1>Add News</h1>
          <p><input class="contact-info" type="date" name="date" placeholder="date" class="shadow-one"></p>
          <p><textarea id="message-box" name="post" rows="6" placeholder="What's the scoop, Betty Boop?" class="shadow-one"></textarea></p>
          <p><button id="add-news-button" @click="addNews()" type="button" class="shadow-one">Done</button></p>
          <div id="news-conf" />
        </form>
      </div>
    `,
    methods: {
      addNews: async () => {
    
        const formValues = $('form').serialize();
        console.log(formValues);
        
        $.post("/admin/add-news", formValues, function(data) {
          if (data === "Post Added.") { 
            var form = document.getElementById('add-news');
            form.reset();
            $('form input').prop("disabled", true);
            $('form textarea').prop("disabled", true);
            $('form button').prop("disabled", true);
          };
          $("#news-conf").html(data);       
        })
      }
    }
  })

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        <background />
        <band-name />
        <div v-if="loggedIn">
          <list-news />
          <add-news />
        </div>
        <div v-else>
          <login-form @log-in="logIn" />
        </div>
      </div>
    `,
    data: {
      loggedIn: false
    },
    methods: {
      logIn() {
        this.loggedIn = true
        this.$forceUpdate();
        console.log("Logged in")
      }
    }
  })
})