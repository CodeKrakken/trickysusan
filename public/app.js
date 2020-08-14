Vue.config.devtools = true

Vue.component ('background', {
  template: `
  <div>
    <div id="background">
  </div>
`
})

Vue.component ('band-name', {
  template: `
    <div>
      <img src="images/band-name.jpg" id="band-name">
    </div>
  `
})

Vue.component('socials', {
  template: `
    <div id="socials">
      <span v-for="social in socials">
        <a :href="social.link" target="_blank">
          <img v-bind:src="social.image" id="social">
        </a> 
      </span>
    </div>
  `,
  data() {
    return {
      socials: [
        {
          image: 'images/instagram hover.png',
          link: 'https://www.instagram.com/trickysusan/?hl=en'
        },
        {
          image: 'images/facebook hover.png',
          link: 'https://www.facebook.com/TrickySusan'
        },
        {
          image: 'images/yt_icon_rgb.png',
          link: 'https://www.youtube.com/user/youronewayticket'
        }
      ]
    }
  }
})

Vue.component('main-content', {
  template: `
    <div class="main-content border">
      <div v-show="selectedTab === 'News'"><news /></div>
      <div v-show="selectedTab === 'Gigs'"><gigs /></div>
      <div v-show="selectedTab === 'Shop'"><shop /></div>
      <div v-show="selectedTab === 'Bio'"><bio /></div>
      <div v-show="selectedTab === 'Photos'"><photos /></div>
      <div v-show="selectedTab === 'Videos'"><videos /></div>
      <div v-show="selectedTab === 'Contact'"><contact /></div>
    </div>
  `,
  props: {
    selectedTab: {
      type: String,
      required: true
    },
    msg: {
      type: Boolean,
      required: true
    }
  }
})

Vue.component('news', {
  template: `
    <div id="news">
      <div v-for="(post, index) in posts">
        <span :key="index">{{ post.date }}<br><br></span>
        <span :key="index" v-html="post.text" />
      </div>
    </div>
  `,
  data() {
    return {
      posts: [
        {
          text: 'COVID-19 was a major prick, and still is as far as we’re concerned. Aside from all the obvious, it stopped us playing ... for now. We’re working really hard to establish when we can get back to rocking out in front of you.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ... <br><br><div class="center"><h1>KA-POW.</h1></div>',
          date: '14/07/2020'
        }
      ]
    }
  }
})

Vue.component('gigs', {
  template: `
    <div class="center border">
      <img src="/images/stage.jpg" id="gig-image"/><br><br>
      <div id="gig-caption">
        You will note the lack of bodies both on and off stage.<br>
        As soon as this can be remedied, it shall be.
      </div>
    </div>
  `,
})

Vue.component('shop', {
  template: `
    <div>
      We would have a single for sale, but ... y'know
    </div>
  `
})

Vue.component('bio', {
  template: `
    <div>
      Tricky Susan are here to assault your taste buds with their attention-demanding rock ‘n’ roll. 
      A four-piece outfit formed in London and led by Camilla Summerskill, Tricky Susan are paving the way with their melodic, 
      hook-driven and beat-centric hits. On stage, their energy is hard to match. 
      On record, their hunger to tell you their story inescapable.
      <br><br>
      They don’t do tired. They do do melodies. They don’t follow crowds. They do like crowds. They HATE pretentiousness. 
      But they adore profundity ... They fi ... 
      <br><br>
      <div class="center">
      What are you still doing reading this? Frick off to the gig page. NOW.
      <br><br>
        Camilla on vocals<br>
        Donald on guitar<br>
        John on bass<br>
        Val on drums

        <div id="quotes">
          "... I’ve seen deaf people cry at a Tricky Susan show ..."<br>
          "... I’ve even seen a goose take a bump at one of their shows ..."
        </div>
      </div>
    </div>
  `
})

Vue.component('photos', {
  template: `
    <div id="photos">
      <img v-bind:src="images[selectedImageIndex]" id="single-photo">
      <div id="video-navigator">
        <button v-on:click="previousImage()" class="nav-button" id="previous" />
        <div id="caption" />
        <button v-on:click="nextImage()" class="nav-button" id="next" />
      </div>
    </div>
  `,
  data() {
    return {
      images: [
        'images/A_IMGP9182-1-StandingLilWall_neon.jpg',
        'images/B_IMGP8878-1_WallSatire_Neon_Blue.jpg',
        'images/C_IMGP9120-1_LilWall_neon.jpg',
        'images/D_IMGP8979-1_Chair_2_Neon_lightening.jpg',
        'images/E_IMGP8842-1_Val_Neon.jpg',
        'images/F_8832-1_Wall_neon.jpg',
        'images/IMGP9959.jpg',
        'images/promo.jpg',
        'images/IMGP9985.jpg',
        'images/WaterRats.jpg',
        'images/IMGP9917.jpg',
      ],
      selectedImageIndex: 0,
    }
  },
  methods: {
    nextImage() {
      this.selectedImageIndex === (this.images.length - 1) ?
      this.selectedImageIndex = 0 :
      this.selectedImageIndex += 1;
    },

    previousImage() {
      this.selectedImageIndex === 0 ?
      this.selectedImageIndex = (this.images.length - 1) :
      this.selectedImageIndex -= 1;
    }
  }
})

Vue.component('videos', {
  template: `
    <div>
      <span v-html="videos[selectedVideoIndex].address" />
      <div id="video-navigator">
        <button v-on:click="previousVideo()" id="previous" class="border nav-button"/>     
        <div id="caption">
          "{{ videos[selectedVideoIndex].name }}"
        </div>
        <button v-on:click="nextVideo()" id="next" class="border nav-button"/>
      </div>
    </div>
  `,
  data() {
    return {
      videos: [
        {
          name: "Strategy",
          address: '<iframe src="https://www.youtube.com/embed/exggrODRu4w?rel=0" \
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
          name: "Tug of War",
          address: '<iframe src="https://www.youtube.com/embed/hm2jNxkG2ak?rel=0" \
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }  
      ],
      selectedVideoIndex: 1
    }
  },
  methods: {
    previousVideo() {
      this.selectedVideoIndex === 0 ?
      this.selectedVideoIndex = (this.videos.length - 1) :
      this.selectedVideoIndex -= 1
    },
    nextVideo() {
      this.selectedVideoIndex === (this.videos.length - 1) ?
      this.selectedVideoIndex = 0 :
      this.selectedVideoIndex += 1
    }
  }
})

Vue.component('contact', {
  template: `
    <div class="center">
      <h1>Contact</h1>
      <form method="POST" action="send">
        <p><input class="contact-info" type="text" name="name" placeholder="name"></p>
        <p><input class="contact-info" type="email" name="email" placeholder="email"></p>
        <p><textarea id="message-box" name="message" rows="6" placeholder="What's going down, Charlie Brown?"></textarea></p>
        <p><button id="submit-button" type="submit">Done</button></p>
        <span v-if="window.msg === true">Message Sent.</span>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      email: '',
      errors: {
        name: false,
        email: false
      },
    }
  },
  methods: {
    processForm: function() {
      console.log({ name: this.name, email: this.email });
      alert('Processing!');
    },
    validateEmail: function() {
      const isValid = window.isValidEmail(this.email)

      console.log(isValid);
      this.errors.email = !isValid;
    }
  },
  props: {
    msg: {
      type: Boolean,
      required: true
    }
  }
})

Vue.component('player', {
  template: `
    <div>
      <iframe scrolling="no" height=300 frameborder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1040292169%3Fsecret_token%3Ds-CcynywUems9&color=%2382d5e8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trickysusan" title="Tricky Susan" target="_blank" style="color: #cccccc; text-decoration: none;">Tricky Susan</a> · <a href="https://soundcloud.com/trickysusan/sets/website/s-CcynywUems9" title="Website" target="_blank" style="color: #cccccc; text-decoration: none;">Website</a></div>
    </div>
  `
})

Vue.component ('tabs', {
  template: `
    <div id="tabs">
      <span
      v-for="(tab, index) in tabs"
      @click="selectTab(tab)"
      :key="index"
      ><div id="tab">{{ tab }}</div></span>
    </div>
  `,
  data() {
    return {
      tabs: [
        'News', 
        'Gigs',
        'Bio',
        'Photos',
        'Videos',
        'Contact'
      ],
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
      this.$emit('select-tab', this.selectedTab)
    }
  }
})

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <background />
      <band-name />
      <socials />
      <main-content :selectedTab="selectedTab" />
      <tabs @select-tab="selectTab" />
    </div>
  `,
  data: {
    selectedTab: 'Contact',
    msg: window.msg
  },   
  methods: {
    selectTab(tab) {
    this.selectedTab = tab     }
  }
})