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
      <ul>
        <span class="news"
        v-for="(post, index) in posts"
        :key="index"
        ><li>{{ post }}</li></span>
      </ul>
    </div>
  `,
  data() {
    return {
      posts: ["Well ... nothing, obviously."]
    }
  }
})

Vue.component('gigs', {
  template: `
    <div>
      Clearly none.
    </div>
  `
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
      <iframe scrolling="no" autoplay="no" height=300 frameborder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1040292169%3Fsecret_token%3Ds-CcynywUems9&color=%2382d5e8&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>
    </div>
  `
})

var app = new Vue({
  el: '#app'
})