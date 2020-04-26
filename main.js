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
      Well ... nothing, obviously.
    </div>
  `
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

Vue.component('Bio', {
  template: `
    <div>
      Once up on a time, we formed and played for a bit. Then we had to stop because ...
    </div>
  `
})

Vue.component('Photos', {
  template: `
    <div>
      Here will be photos
    </div>
  `
})

var app = new Vue({
  el: '#app'
})