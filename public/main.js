Vue.config.devtools = true

Vue.component ('tabs', {
  template: `
    <div>
      <ul>
        <span class="tab"
        :class="{ activeTab: selectedTab === tab }"
        v-for="(tab, index) in tabs"
        @click="selectedTab = tab"
        :key="index"
        >{{ tab }}&nbsp&nbsp</span>
      </ul>

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
        <photos><photos>
      </div>
    <div>
  `,
  data() {
    return {
      tabs: ['News', 'Gigs', 'Shop', 'Bio', 'Photos'],
      selectedTab: 'News'
    }
  }
})

Vue.component('news', {
  template: `
    <div>
      <table border width=500>
        <span class="news"
        v-for="(post, index) in posts"
        :key="index"
        ><tr><td>{{ post.date }}</td><td>{{ post.text }}</td></tr></span>
      </ul>
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
      <table border width=500>
        <span class="gigs"
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
      Once upon a time, we formed and played for a bit. Then we had to stop because ...
    </div>
  `
})

Vue.component('photos', {
  template: `
    <div>
      <ul>
        <li><img src="Artwork - Table Doodles.jpg" width=1200>
      </ul>
    </div>
  `
})

Vue.component('Player', {
  template: `
    <div>
      <iframe scrolling="no" height=300 frameborder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1040292169%3Fsecret_token%3Ds-CcynywUems9&color=%2382d5e8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trickysusan" title="Tricky Susan" target="_blank" style="color: #cccccc; text-decoration: none;">Tricky Susan</a> · <a href="https://soundcloud.com/trickysusan/sets/website/s-CcynywUems9" title="Website" target="_blank" style="color: #cccccc; text-decoration: none;">Website</a></div>
    </div>
  `
})

var app = new Vue({
  el: '#app'
})