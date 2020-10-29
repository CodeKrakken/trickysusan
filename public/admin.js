Vue.config.devtools = true

$(document).ready(function(){

  Vue.component('login-form', {
    template: `
      <div class="main-content center">
        <div>
          <h1>Log In</h1>
          <form id="login">
            <input type="text" name="username" placeholder="username" /><br>
            <input type="password" name="password" placeholder="password" /><br><br>
            <button type="button" @click="login()">Login</button>
            <div id="login-conf">
          </form>
        </div>    
      </div>
    `,
    methods: {
      login() {
        login = this
        const formValues = $('form').serialize();
        $.post("/admin/login", formValues, function(data) {
          if (data === "Server: login successful.") {
            login.$emit('toggle-login', true);
          } else {
            $("#login-conf").html("Guess again, sucka!")              
          }
        })
      }
    }
  })

  Vue.component('list-news', {
    template: `
      <div id="list-news">
        <div 
          v-for="post in news"
          key={post.post_id}
        >
          <span id="admin-news-preview">
            {{ moment(post.date).format('DD.MM.YY') }} ... {{ post.post }}
          </span>
          <button id="delete-news-button" @click="deleteNews(post.post_id)" type="button">Delete</button>
          <br><br>
        </div>
      </div>
    `,
    props: {
      news: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteNews(post_id) {
        try {
          fetch(`/admin/delete-news/${post_id}`, {
            method: "DELETE"
          });
          this.$emit('delete-news', post_id)
        } catch (err) {
          console.error(err.message)
        }
      }
    }
  })

  Vue.component('add-news', {
    template: `
      <div>
        <form id="add-news">
          <h1>Add News</h1>
          <p><input class="contact-info shadow-one" type="date" v-model="date" name="date" placeholder="date"></p>
          <p><textarea id="message-box" v-model="post" name="post" rows="6" placeholder="What's the scoop, Betty Boop?"></textarea></p>
          <p><button id="add-news-button" @click="addNews()" type="button" class="shadow-one">Done</button></p>
          <div id="news-conf" />
        </form>
      </div>
    `,
    methods: {
      addNews() {
        const formValues = $('form').serialize();
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
        const news = {
          date: this.date,
          post: this.post
        }
        this.$emit('add-news', news)
      }
    },
    data() {
      return {
        date: '',
        post: ''
      }
    }
  })

  Vue.component('logout-button', {
    template: `
      <div id="logout-button">
        <button @click="logout()">Log Out</button>
      </div>
    `,
    methods: {
      logout() {
        this.$emit('toggle-login', false)
      }
    }
  })

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        <background />
        <band-name />
        <div v-if="loggedIn === 'true'">
          <list-news :news="news" @delete-news="deleteNews" />
          <add-news @add-news="addNews" />
          <logout-button @toggle-login="toggleLogin" />
        </div>
        <div v-else>
          <login-form @toggle-login="toggleLogin" />
        </div>
      </div>
    `,
    data: {
      loggedIn: sessionStorage.login,
      news: []
    },
    mounted() {
      this.getNews()
    },
    beforeUpdate() {
      this.updateLogin()
    },
    methods: {
      updateLogin() {
        this.loggedIn = sessionStorage.login
      },
      toggleLogin(status) {
        this.loggedIn = status
        sessionStorage.login = status
      },
      addNews(news) {
        this.news.unshift(news)
        this.news.sort((a, b) => (a.date < b.date) ? 1 : -1)
      },

      getNews() {
        $.get("/news")
        .then(response => (this.news = response.reverse()))
      },
      deleteNews(post_id) {
        this.news = this.news.filter( el => el.post_id !== post_id )
      }
    }
  })
})