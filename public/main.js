Vue.config.devtools = true

Vue.component ('banner', {
  template: `
    <div>
      <img src="images/Logo_Neon.jpg" id="banner">
    </div>
  `
})

Vue.component ('tabs', {
  template: `
    <div>

      <span
      id="tab"
      v-for="(tab, index) in tabs"
      @click="selectTab(tab)"
      :key="index"
      >{{ tab }}</span>

    <div>
  `,
  data() {
    return {
      tabs: [
        'News', 
        'Gigs', 
        'Shop', 
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

Vue.component('tab-content', {
  template: `
    <div class="content-container">
      <div class="content">

      <div v-show="selectedTab === 'News'">
        <news></news>
      </div>

      <div v-show="selectedTab === 'Gigs'">
        <gigs></gigs>
      </div>

      <div v-show="selectedTab === 'Shop'">
        <shop></shop>
      </div>

      <div v-show="selectedTab === 'Bio'">
        <bio></bio>
      </div>

      <div v-show="selectedTab === 'Photos'">
        <photos></photos>
      </div>

      <div v-show="selectedTab === 'Videos'">
        <videos></videos>
      </div>
    </div>
  
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
    <div>
      <table>
        <span
        v-for="(post, index) in posts"
        :key="index"
        ><tr><td>{{ post.date }}</td><td>{{ post.text }}</td></tr></span>
      </table>
    </div>
  `,
  data() {
    return {
      posts: [
        {
          "date": "23/03/2020",
          "text": "Apparently there's some sort of Super Flu knocking about and we're not keen - Therefore, totally of our own volition, we've decided to go into lockdown. People might say we're mad ... Tricky Susan, you've got a single to mix! Uh uh. We're staying home beneath the duvet until this fucking shit is done with."
        },
        {
          "date": "03/03/2020",
          "text": "Wowsers trousers, so fucking excited to be about to record a single, woo!"
        }
      ]
    }
  }
})

Vue.component('gigs', {
  template: `
    <div>
      <table>
        <span
        v-for="(gig, index) in gigs"
        :key="index"
        ><tr><td>{{ gig.date }}</td><td>{{ gig.venue }}</td></tr><br></span>
      </table>
    </div>
  `,
  data() {
    return {
      gigs: [
        {
          "date": "13/04/20", 
          "venue": "Dublin Castle"
        },
        {
          "date": "15/06/20",
          "venue": "Camden Barfly"
        },
        {
          "date": "31/08/21", 
          "venue": "Reading Festival"
        }
      ]
    }
  }
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
      Tricky Susan are here to assault your taste buds with their attention-demanding rock ‘n’ roll. A four-piece outfit formed in London and led by Camilla Summerskill, Tricky Susan are paving the way with their melodic, hook-driven and beat-centric hits. On stage, their energy is hard to match. On record, their hunger to tell you their story inescapable.
      <br><br>
      They don’t do tired. They do do melodies. They don’t follow crowds. They do like crowds. They HATE pretentiousness. But they adore profundity…. They fi.…What are you still doing reading this? Frick off to the gig page.        NOW.
      <br><br>
      <div class="center">
        Camilla on vocals<br>
        Donald on guitar<br>
        John on bass<br>
        Val on drums<br><br>
    
        "... I’ve seen deaf people cry at a Tricky Susan show ..."<br>
        "... I’ve even seen a goose take a bump at one of their shows ..."
      </div>
    </div>
  `
})

Vue.component('photos', {
  template: `
    <div>
      <img v-bind:src="images[0]" id="single-photo">
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
        'images/IMGP0004.jpg',
        'images/IMGP9985.jpg',
        'images/WaterRats.jpg',
        'images/IMGP9917.jpg',
      ]
    }
  }
})

Vue.component('videos', {
  template: `
    <div>
      <span v-for="video in videos">
        <video height=300 controls>
          <source v-bind:src="video" type="video/mp4">
        </video>
      </span>
    </div>
  `,
  data() {
    return {
      videos: [
        "videos/Strategy.mp4",
        "videos/Leftover Love.mp4",
        "videos/Philosophy.mp4",
        "videos/Tug of War.mp4"
      ]
    }
  },
  computed: {
    video(index) {
      return this.videos(index)
    }
  }
})

Vue.component('Player', {
  template: `
    <div>
      <iframe scrolling="no" height=300 frameborder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1040292169%3Fsecret_token%3Ds-CcynywUems9&color=%2382d5e8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trickysusan" title="Tricky Susan" target="_blank" style="color: #cccccc; text-decoration: none;">Tricky Susan</a> · <a href="https://soundcloud.com/trickysusan/sets/website/s-CcynywUems9" title="Website" target="_blank" style="color: #cccccc; text-decoration: none;">Website</a></div>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <div class="grid-template-container">
        <banner></banner>
        <tab-content :selectedTab="selectedTab"></tab-content>
        <tabs @select-tab="selectTab" id="tabs"></tabs>
      </div>
    </div>
   `,
   data: {
     selectedTab: 'Bio',
   },
   methods: {
     selectTab(tab) {
       this.selectedTab = tab
     }
   }
})