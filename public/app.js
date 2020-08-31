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

  window.onload = function() {


  const canvas = $("canvas");
  const h3 = $('name');
  const audio = $("audio");

  $("file-input").onChange = function() {

    const files = this.files;
    console.log('FILES[0]: ', files[0])
    audio.src = URL.createObjectURL(files[0]);

    const name = files[0].name
    h3.innerText = `${name}`

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);

    const analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 16384;

    const bufferLength = analyser.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength);

    console.log('DATA-ARRAY: ', dataArray)

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    console.log('WIDTH: ', WIDTH, 'HEIGHT: ', HEIGHT)

    const barWidth = (WIDTH / bufferLength) * 13;
    console.log('BARWIDTH: ', barWidth)

    console.log('TOTAL WIDTH: ', (117*10)+(118*barWidth))

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      let r, g, b;
      let bars = 118

      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2.5);

        if (dataArray[i] > 210) {
          r = 250
          g = 0
          b = 255
        } else if (dataArray[i] > 200) {
          r = 250
          g = 255
          b = 0
        } else if (dataArray[i] > 190) {
          r = 204
          g = 255
          b = 0
        } else if (dataArray[i] > 180) {
          r = 0
          g = 219
          b = 255
        } else if (dataArray[i] < 150) {
          r = 0
          g = 199
          b = 255
        } else if (dataArray[i] < 140) {
          r = 0
          g = 12
          b = 255
        }

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 10
      }
    }

    audio.play();
    renderFrame();
  };
};

  Vue.component ('background', {
    template: `
      <div>
        <div id="background">
      </div>
    `
  })

  Vue.component ('band-name', {
    template: `
      <div class="shadow-one" id="band-name-container" >
        <img src="/images/band-name.jpg" id="band-name" />
      </div>
    `
  })

  Vue.component('socials', {
    template: `
      <div id="socials">
        <span v-for="social in socials">
          <a :href="social.link" target="_blank">
            <img v-bind:src="social.image" id="social" class="shadow-one">
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
            image: 'images/youtube.png',
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
            text: 'Let’s face it - COVID-19 continues to be a major prick. We’re working really hard to establish which venues will have us back as soon as possible, so we can provide an antidote to all this BS – a large and loud dose of Tricky Susan.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ...<br><br><div class="center"><h1>KA-POW.</h1></div>',
            date: '14/07/2020'
          }
        ]
      }
    }
  })

  Vue.component('music', {
    template: `
      <div>
        <div class="music-navigator border">
          <div id="song-name" class="border"> "{{ audios[selectedSongIndex].name }}" </div>
          <button class="nav-button border" 
                  id="player-previous" 
                  @click.prevent="previousSong()">
                  <img src="/images/previous-button.png" id="previous-icon" />
          </button>
          <button v-if="this.playing === true" 
                  id="pause-button" 
                  class="border nav-button" 
                  @click="pause(audios[selectedSongIndex].file)">
                  <img src="/images/pause-button.png" id="pause-icon" />
          </button>
          <button v-if="this.playing === false" 
                  id="play-button"
                  class="border nav-button" 
                  @click="play(audios[selectedSongIndex].file)">
                  <img src="/images/play-button.png" id="play-icon" />
          </button>
          <button 
                  class="nav-button border" 
                  id="player-next" 
                  @click.prevent="nextSong()">
                  <img src="/images/next-button.png" id="next-icon" />
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
            name: 'Undercover',
            file: new Audio('Undercover.mp3')
          },
          {
            name: 'Grab',
            file: new Audio('Grab.mp3')
          },
          {
            name: 'Strategy',
            file: new Audio('Strategy.mp3')
          },
          {
            name: 'Philosophy',
            file: new Audio('Philosophy.mp3')
          },
          {
            name: 'Lifeline',
            file: new Audio('Lifeline.mp3')
          },
          {
            name: 'Fidelity',
            file: new Audio('Fidelity.mp3')
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

  Vue.component('visualiser', {
    template: `
      <div>
        <input type="file" id="file-input" accept="audio/*,video/*,image/*" />
        <canvas id="canvas"></canvas>
        <h3 id="name"></h3>
        <audio id="audio" controls></audio>
        <div id="background"></div>
      </div>
    `
  })

  Vue.component('gigs', {
    template: `
      <div>
        <div class="photo">
          <span v-html="video.address" />
        </div>
        <div id="gig-caption">
          "{{ video.name }}"
        </div>
      </div>
    `,
    data() {
      return {
        video: {
          name: "Philosophy (live)",
          address: '<iframe src="https://www.youtube-nocookie.com/embed/Z5I9GFF74-Y?rel=0&modestbranding=1" \
                    frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                    gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
      }
    }
  })

  Vue.component('bio', {
    template: `
      <div>
        Tricky Susan are here to assault your taste buds with their attention-grabbing rock ‘n’ roll.
        <br><br>
        A four-piece outfit formed in London, Tricky Susan entice you to join their journey with their melodic, hook-driven and beat-centric hits.
        Packing the punch in their storytelling and an intense gusto for performing live – their energy is hard to eclipse.
        <br><br>
        Head over to the Gigs page and follow them on Instagram and Facebook … PRONTO. 
          
        <div id="quotes">
          "... I’ve seen deaf people cry at a Tricky Susan show ..."<br>
          "... I’ve even seen a goose take a bump at one of their shows ..."
        </div>

      </div>
    `
  })

  Vue.component('photos', {
    template: `
      <div>
        <div class="photo-outer">
          <img :src="images[selectedImageIndex]" class="photo" />
        </div>
        <div id="video-navigator">
          <button @click="previousImage()" class="previous nav-button">
            <img src="/images/previous-button.png" id="previous-icon" />
          </button>
          <div id="caption" />
          <button @click="nextImage()" class="next nav-button">
            <img src="/images/next-button.png" id="next-icon" />
          </button>
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
        selectedImageIndex: 1,
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
        <div class="photo">
          <span v-html="videos[selectedVideoIndex].address" />
        </div>
        <div id="video-navigator">
          <button @click="previousVideo()" class="previous border nav-button">
            <img src="/images/previous-button.png" id="previous-icon" />
          </button>
          <div id="caption">
            "{{ videos[selectedVideoIndex].name }}"
          </div>
          <button @click="nextVideo()" class="border next nav-button">
            <img src="/images/next-button.png" id="next-icon" />
          </button>
        </div>
      </div>
    `,
    data() {
      return {
        videos: [
          {
            name: "Strategy",
            address: '<iframe src="https://www.youtube.com/embed/exggrODRu4w?rel=0&modestbranding=1" \
                      frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                      gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            name: "Tug of War",
            address: '<iframe src="https://www.youtube.com/embed/hm2jNxkG2ak?rel=0&modestbranding=1&start=4" \
                      frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                      gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            name: "Come On Over (session)",
            address: '<iframe src="https://www.youtube.com/embed/X3lryMPttIY?rel=0&modestbranding=1" \
                      frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
                      gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            name: "Baby, I Do",
            address: '<iframe src="https://www.youtube.com/embed/qTJmtTHc31U?rel=0&modestbranding=1" \
                      frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media; \
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
          <p><input class="contact-info" type="text" name="name" placeholder="name"  class="shadow-one"></p>
          <p><input class="contact-info" type="email" name="email" placeholder="email" class="shadow-one"></p>
          <p><textarea id="message-box" name="message" rows="6" placeholder="What's going down, Charlie Brown?" class="shadow-one"></textarea></p>
          <p><button id="submit-button" type="button" class="shadow-one">Done</button></p>
          <div id="message-conf" />
        </form>
      </div>
    `,
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
      <div class="huh">
        <background />
        <band-name />
        <socials />
        <main-content :selectedTab="selectedTab" />
        <tabs @select-tab="selectTab" />
      </div>
    `,
    data: {
      selectedTab: 'Gigs'
    },   
    methods: {
      selectTab(tab) {
        this.selectedTab = tab 
      },
    },
  })

  var ape = new Vue({
    el: '#ape',
    template: `
    <div>
      <visualiser />
    </div>`
  })
})

