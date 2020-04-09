<template lang="pug">
  #app
    section.section
      <audio ref="audio" :src="urlPlayTrack" type="audio,peg" controls autoplay></audio>
      nav.nav.has-shadow
        .container
          input.input.is-medium(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
            @keyup="search(searchQuery)"
          )
          a.button.is-info.is-medium(@click="search(searchQuery)") Buscar
          a.button.is-danger.is-medium(@click="cancel") &times;
          span
            small {{searchMessage}}
      .container.results
        .columns
          .column(v-for="t in tracks")
            h3 {{ t.name }}
            button(@click="playTrack(t.preview_url)") Play
</template>

<script>
  import api from './services/spooty-api';
  export default {
    name: null,
    data () {
      return {
        searchQuery: '',
        tracks: [],
        urlPlayTrack: ''
      }
    },
    methods: {
        search(name){
            if (name){
                api(name).then(data => (this.tracks = data.tracks.items));
            }
            else{
                this.tracks = [];
            }
      },
      cancel(){
          this.searchQuery = '';
          this.tracks = [];
      },
      playAudio(){
          this.$refs.audio.play();
      },
      playTrack(trackUrl){
          this.urlPlayTrack  = trackUrl;
          this.playAudio();
      }
    },
    computed:{
      searchMessage(){
        return `Encontrados: ${this.tracks.length}`;
      }
    }
  }
</script>
<style lang="scss">
  @import "./scss/main.scss";
    .results{
        margin-top:50px;
    }
</style>