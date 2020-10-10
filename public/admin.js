Vue.config.devtools = true

$(document).ready(function(){

  Vue.component('login-form', {
    template: `
      <div class="main-content center">
        <div>
          <h1>Log In</h1>
          <form id="login" method="POST" action="/">
            <input type="text" name="username" placeholder="username" /><br>
            <input type="password" name="password" placeholder="password" /><br><br>
            <button type="button" @click="login()">Login</button>
            <div id="message-conf">
          </form>
        </div>    
      </div>
    `,
    data() {
      return {
        loginStatus: false
      }
    },
    methods: {
      login() {
        login = this
        const formValues = $('form').serialize();
        $.post("/admin/login", formValues, function(data) {
          if (data === "Server: login successful.") {
            this.loginStatus = true
            login.$emit('log-in', this.loginStatus);
          } else {
            $("#message-conf").html("Username or Password Incorrect");
          }
        })

      }
    }
  })

  Vue.component('logout-button', {
    template: `
      <div>
        <button @click="logout()">Log Out</button>
      </div>
    `,
    methods: {
      logout() {
        this.$emit('log-out', false)
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

  // 

  var admin = new Vue({
    el: '#admin',
    template: `
      <div>
        <background />
        <band-name />
        <div v-if="loggedIn">
          <logout-button @log-out="logOut" />
          <list-news />
          <add-news />
        </div>
        <div v-else>
          <login-form @log-in="logIn" />
        </div>
      </div>
    `,
    data: {
      loggedIn: localStorage.getItem("login")
    },
    methods: {
      logIn(loginStatus) {
        this.loggedIn = loginStatus
        localStorage.setItem("login", true);
        console.log(localStorage.getItem("login"))
      },
      logOut(loginStatus) {
        this.loggedIn = loginStatus
      }
    },
    created() {
      $.get("/admin/login-status")
      .then(response => (this.loggedIn = response))
    },
    destroyed() {
      $.post("/admin/logout")
    }
  })
})