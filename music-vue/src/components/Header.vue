<!-- header -->
<template>
  <div class="header">
    <span>music</span>
    <input type="txt" @keydown.enter="getmusic" v-model="val" />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      val: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getmusic() {
      this.$http
        .get("/search", {
          params: {
            keywords: this.val,
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit("GETmusic", res.data.result.songs);
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
.header {
  width: 780px;
  height: 60px;
  font-size: 16px;
  color: #fff;
  background: rgb(255, 136, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  span {
    font-size: 22px;
    font-style: italic;
  }

  input {
    width: 300px;
    height: 30px;
    text-indent: 15px;
    border: none;
    outline: none;
    border-radius: 15px;
    background: url(http://linweiqin.cn/musicplayer/imgs/zoom.png) 270px center
      no-repeat white;
  }
}
</style>