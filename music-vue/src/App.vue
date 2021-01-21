<template>
  <div id="app">
    <music-header @GETmusic="musicinfo"></music-header>

    <music-main
      :songlist="songlist"
      :imgUrl="imgUrl"
      :msg="msg"
      :showRotate="showRotate"
      @getImg="getimg"
      @playMusic="playm"
      @playVideo="playv"
      @getMsg="getmsg"
    ></music-main>

    <music-footer
      ref="audio"
      @pause="Stoprotate"
      @play="play_music"
      :songUrl="songUrl"
    ></music-footer>

    <div v-show="showVideo" class="mask">
      <video v-if="showVideo" :src="videoUrl" controls autoplay loop></video>
      <span class="close" @click="close">X</span>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "music-header": Header,
    "music-main": Main,
    "music-footer": Footer,
  },
  data() {
    return {
      songlist: [],
      songUrl: "",
      videoUrl: "",
      imgUrl: "",
      msg: [],
      showVideo: false,
      showRotate: false,
    };
  },
  watch: {
    showRotate(newval) {
      this.showRotate = newval;
    },
  },
  methods: {
    musicinfo(songlist) {
      this.songlist = songlist;
      console.log(this.songlist);
    },
    getimg(picurl) {
      this.imgUrl = picurl;
    },
    playm(songurl) {
      this.songUrl = songurl;
      this.showRotate = true;
    },
    playv(videourl) {
      this.videoUrl = videourl;
      this.showVideo = true;
      this.$refs.audio.stopmusic();
    },
    getmsg(msg) {
      this.msg = msg;
    },
    close() {
      this.showVideo = false;
    },
    Stoprotate(v) {
      this.showRotate = v;
    },
    play_music(v) {
      this.showRotate = v;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
  background: url(./assets/bg.png) no-repeat, url(./assets/bg.jpg) no-repeat;
  background-size: 100% 100%;
  position: relative;
}

#app {
  width: 800px;
  height: 600px;
  margin: 60px auto;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9;
  background: #000;
}
video {
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  position: fixed;
  left: 50%;
  top: 40%;
  z-index: 10;
}
.close {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  color: #fff;
}
</style>