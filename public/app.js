Vue.config.devtools = true

$(document).ready(function(){

  $(document).on('click', '#submit-button', function(){

    const formValues = $('form').serialize();
    
    $.post("http://127.0.0.1:3000/", formValues, function(data) {
      if (data === "Message Sent.") { 
        var form = document.getElementById('form');
        form.reset();
        $('form input').prop("disabled", true);
        $('form textarea').prop("disabled", true);
        $('form button').prop("disabled", true);
      };
      $("#message-conf").html(data);        
    })
  })

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
      <div class="main-content">
        <div v-show="selectedTab === 'News'"><news /></div>
        <div v-show="selectedTab === 'Music'"><music /></div>
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

  Vue.component('bio', {
    template: `
      <div>
        Tricky Susan are here to assault your taste buds with their attention-demanding rock ‘n’ roll. 
        A four-piece outfit formed in London and led by Camilla Summerskill, Tricky Susan are paving the
        way with their melodic, hook-driven and beat-centric hits. On stage, their energy is hard to match. 
        On record, their hunger to tell you their story inescapable.<br><br>They don’t do tired. They 
        do do melodies. They don’t follow crowds. They do like crowds. They HATE pretentiousness. 
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
        <img :src="images[selectedImageIndex]" id="single-photo">
        <div id="video-navigator">
          <button @click="previousImage()" class="previous nav-button" />
          <div id="caption" />
          <button @click="nextImage()" class="next nav-button" />
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
          <button @click="previousVideo()" class="previous border nav-button"/>     
          <div id="caption">
            "{{ videos[selectedVideoIndex].name }}"
          </div>
          <button @click="nextVideo()" class="border next nav-button"/>
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
        <h1 id="contact-header">Contact</h1>
        <form id="form" method="POST" action="/">
          <p><input class="contact-info" type="text" name="name" placeholder="name"></p>
          <p><input class="contact-info" type="email" name="email" placeholder="email"></p>
          <p><textarea id="message-box" name="message" rows="6" placeholder="What's going down, Charlie Brown?"></textarea></p>
          <p><button id="submit-button" type="button">Done</button></p>
          <div id="message-conf" />
        </form>
      </div>
    `,
  })

  Vue.component('music', {
    template: `
      <div>
        <div class="music-navigator border">
          <div id="song-name" class="border"> "{{ audios[selectedSongIndex].name }}" </div>
          <button class="previous nav-button border player-button" 
                  id="player-previous" 
                  @click.prevent="previousSong()">
          </button>
          <button v-if="this.playing === true" 
                  id="pause-button" 
                  class="border nav-button player-button" 
                  @click="pause(audios[selectedSongIndex].file)">
          </button>
          <button v-if="this.playing === false" 
                  id="play-button" 
                  class="border nav-button player-button" 
                  @click="play(audios[selectedSongIndex].file)">
          </button>
          <button 
                  class="nav-button border next player-button" 
                  id="player-next" 
                  @click.prevent="nextSong()">
          </button><br>

        </div>
      </div>
    `,
    data() {
      return {
        playing: false,
        autoplay: false,
        selectedSongIndex: 1,
        audios: [
          {
            name: 'Grab',
            file: new Audio('Grab.mp3'),
            playing: false
          },
          {
            name: 'Undercover',
            file: new Audio('Undercover.mp3'),
            playing: false
          }
        ]
      }
    },
    methods: {
      play(audio) {
        this.playing = true;
        audio.play();
      },
      pause(audio) {
        this.playing = false;
        audio.pause();
      },
      previousSong() {
        if (this.playing === true) { 
          this.pause(this.audios[this.selectedSongIndex].file);
          this.autoplay = true;
        }
        this.selectedSongIndex === 0 ?
        this.selectedSongIndex = (this.audios.length - 1) :
        this.selectedSongIndex -= 1;
        if (this.autoplay === true) { 
          this.autoplay = false;
          this.play(this.audios[this.selectedSongIndex].file) 
        }
      },
      nextSong() {
        if (this.playing === true) { 
          this.pause(this.audios[this.selectedSongIndex].file);
          this.autoplay = true; 
        }
        this.selectedSongIndex === (this.audios.length - 1) ?
        this.selectedSongIndex = 0 :
        this.selectedSongIndex += 1

        if (this.autoplay === true) { 
          this.autoplay = false;
          this.play(this.audios[this.selectedSongIndex].file) 
        }
      }
    }
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
          'Music',
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
      selectedTab: 'Music'
    },   
    methods: {
      selectTab(tab) {
        this.selectedTab = tab 
      },
    },
  })
})

