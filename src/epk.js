Vue.config.devtools = true

$(document).ready(function() {

  Vue.component('epk-player', {
    template: `
      <div class="music-navigator border">
        <div id="song-image">
          <img src="/images/play-button.png">
        </div>
        <div id="song-name" class="border"> "{{ audios[selectedSongIndex].name }}" </div>
        <button 
          class="nav-button border" 
          id="player-previous" 
          @click.prevent="previousSong()"
          ><img 
          src="/images/previous-button.png" 
          id="previous-icon" />
        </button>
        <button 
          v-if="this.playing === true" 
          id="pause-button" 
          class="border nav-button" 
          @click="pause(audios[selectedSongIndex].file)">
          <img src="/images/pause-button.png" id="pause-icon" />
        </button>
        <button 
          v-if="this.playing === false" 
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
    `,
    data() {
      return {
        playing: false,
        autoplay: false,
        selectedSongIndex: 0,
        audios: [
          {
            name: 'Undercover',
            file: new Audio('audio/Undercover.mp3')
          },
          {
            name: 'Grab',
            file: new Audio('audio/Grab.mp3')
          },
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

  var epk = new Vue({
    el: '#epk',
    template: `
      <div>
        <epk-player />
      </div>
    `
  })

  

})