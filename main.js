Vue.config.devtools = true

Vue.component ('root', {
  template: `
    <div>
      Tricky Susan
      <tabs></tabs>
    </div>
  `
})

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

var app = new Vue({
  el: '#app'
})