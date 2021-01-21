<!-- main -->
<template>
  <div class="main">
    <div class="left">
      <div class="list" v-for="item in songlist" :key="item.id">
        <i class="play" @click="playmusic(item.id)"></i>
        <span @click="playmusic(item.id)">{{ item.name }}</span>
        <i
          target="_blank"
          :class="['video', { hidden: item.mvid == 0 }]"
          @click="playvideo(item.mvid)"
        >
        </i>
      </div>
    </div>

    <div class="center">
      <img
        src="../assets/player_bar.png"
        alt=""
        :class="['player-bar', { play: showRotate }]"
      />
      <img :src="imgUrl" alt="" class="img" />
      <img
        src="../assets/disc.png"
        alt=""
        :class="['disc', { rotate: showRotate }]"
      />
    </div>

    <div class="right">
      <h5>热门留言</h5>
      <div class="msgbox">
        <div class="msg" v-for="v in msg" :key="v.user.Id">
          <div class="msg_left">
            <img :src="v.user.avatarUrl" alt="" />
          </div>
          <div class="msg_right">
            <p>{{ v.user.nickname }}</p>
            <div>{{ v.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: ["songlist", "imgUrl", "msg", "showRotate"],
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    playmusic(id) {
      console.log(id);
      // 获取歌曲链接
      this.$http
        .get("/song/url", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit("playMusic", res.data.data[0].url);
        });
      //获取图片链接
      this.$http
        .get("/song/detail", {
          params: {
            ids: id,
          },
        })
        .then((r) => {
          console.log(r);
          this.$emit("getImg", r.data.songs[0].al.picUrl);
        });
      //获取留言
      this.$http
        .get("/comment/hot?type=0", {
          params: {
            id: id,
          },
        })
        .then((r) => {
          console.log(r);
          this.$emit("getMsg", r.data.hotComments);
        });
    },
    playvideo(mvid) {
      console.log(mvid);
      // 获取mv
      this.$http
        .get("/mv/url", {
          params: {
            id: mvid,
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit("playVideo", res.data.data.url);
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.main {
  width: 800px;
  height: 480px;
  background: rgba(69, 163, 206, 0.5);
  display: flex;

  .left {
    width: 200px;
    min-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .list:nth-child(odd) {
      background: rgba(141, 141, 141, 0.623);
    }
    .list {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .play {
        width: 25px;
        height: 25px;
        background: url(../assets/table.png) -20px -20px;
        align-self: center;
      }
      span {
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: rgb(83, 6, 58);
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .video {
        width: 25px;
        height: 25px;
        background: url(../assets/table.png) -2px -44px;
        align-self: center;
      }
    }
  }

  .hidden {
    visibility: hidden;
  }
  .center {
    width: 400px;
    height: 100%;
    position: relative;

    .player-bar {
      left: 200px;
      position: absolute;
      z-index: 8;
      transform: rotate(-25deg);
      transform-origin: 12px 12px;
      transition: all 2s;
    }

    .img {
      top: 156px;
      left: 156px;
      position: absolute;
      width: 150px;
      height: 150px;
    }

    .disc {
      position: absolute;
      left: 100px;
      top: 100px;
    }

    .play {
      transform: rotate(0deg);
    }
    .rotate {
      animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .right {
    width: 200px;
    min-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    h5 {
      font-size: 14px;
      font-weight: 500;
      padding: 5px;
    }
    .msgbox {
      width: 100%;
      height: 100%;

      .msg {
        display: flex;
        margin: 10px 0;
        .msg_left {
          width: 30px;
          height: 34px;
          padding: 5px;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
        .msg_right {
          width: 150px;
          p {
            margin: 5px;
            font-size: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          div {
            font-size: 12px;
            color: #fff;
            font-weight: 100;
          }
        }
      }
    }
  }
}
</style>