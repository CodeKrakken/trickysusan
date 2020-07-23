Vue.config.devtools = true

Vue.component ('banner', {
  template: `
    <div>
      <img src="images/Logo_Neon.jpg" id="banner">
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
    <div class="main-content">
      <div v-show="selectedTab === 'News'"><news /></div>
      <div v-show="selectedTab === 'Gigs'"><gigs /></div>
      <div v-show="selectedTab === 'Shop'"><shop /></div>
      <div v-show="selectedTab === 'Bio'"><bio /></div>
      <div v-show="selectedTab === 'Photos'"><photos /></div>
      <div v-show="selectedTab === 'Videos'"><videos /></div>
    </div>
  `,
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  }
})

Vue.component('news', {
  template: `
    <div id="news">
      <div v-for="(post, index) in posts">
        <span :key="index">{{ post.date }}<br><br></span>
        <span :key="index" v-html="post.text">
        </span>
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
    <div class="center">
      You will note the lack of people both on and off stage. As soon as this can be remedied, it shall be.<br>
      <img src="/images/stage.jpg" id="gig-image"/>
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
        Val on drums<br><br>

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
      <button v-on:click="previousImage()" id="previous-button" /> 
      <img v-bind:src="images[selectedImageIndex]" id="single-photo">
      <button v-on:click="nextImage()" id="next-button" />
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
    </div>
  `,
  data() {
    return {
      videos: [
        {
          name: "Strategy",
          address: '<iframe width="560" height="315" src="https://www.youtube.com/embed/exggrODRu4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
          name: "Tug of War",
          address: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hm2jNxkG2ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }  
      ],
      selectedVideoIndex: 0
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
      id="tab"
      v-for="(tab, index) in tabs"
      @click="selectTab(tab)"
      :key="index"
      >{{ tab }}</span>
    </div>
  `,
  data() {
    return {
      tabs: [
        'News', 
        'Gigs', 
        'Bio', 
        'Photos', 
        'Videos'
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

Vue.component ('nothing', {
  template: `
    <div>
      <div class="photos">
        I<br>s<br> <br>i<br>t<br> <br>p<br>o<br>s<br>s<br>i<br>b<br>l<br>e<br> <br>t<br>o<br> <br>h<br>a<br>v<br>e<br> <br>a<br> <br>w<br>h<br>o<br>l<br>e<br> <br>s<br>c<br>r<br>o<br>l<br>l<br>i<br>n<br>g<br> <br>p<br>a<br>g<br>e<br> <br>w<br>i<br>t<br>h<br>o<br>u<br>t<br> <br>a<br> <br>s<br>c<br>r<br>o<br>l<br>l<br>b<br>a<br>r<br> <br>a<br>t<br> <br>t<br>h<br>e<br> <br>s<br>i<br>d<br>e<br>?<br> <br>L<br>e<br>t<br>'<br>s<br> <br>f<br>i<br>n<br>d<br> <br>o<br>u<br>t<br>,<br> <br>t<br>o<br>g<br>e<br>t<br>h<br>e<br>r<br>.
      </div>
  </div>
  `
})

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <banner />
      <socials />
      <main-content :selectedTab="selectedTab" />
      <tabs @select-tab="selectTab" />
    </div>
   `,
   data: {
     selectedTab: 'Videos',
   },
   methods: {
     selectTab(tab) {
       this.selectedTab = tab
     }
   }
})

var sandpit = new Vue({
  el: '#sandpit',
  template: `
    <div>
      <nothing />
    </div>
  `,
  data: {
    selectedTab: 'Photos',
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    }
  }
})

