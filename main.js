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
        >{{ tab }}</span>
      </ul>
    <div>
  `,
  data() {
    return {
      tabs: ['News', 'Gigs', 'Shop', 'Bio'],
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


var app = new Vue({
  el: '#app'
})