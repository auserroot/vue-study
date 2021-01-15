<template>
  <div id="app">
    <input type="text" v-focus>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  
  //钩子函数 绑定元素时执行
  directives:{
    "focus":{
      //绑定时执行一次
      bind:function(el,binding,vnode){
        console.log(el);
        console.log(binding);
        console.log(vnode);
      },
      //绑定元素插入父元素时调用
      inserted:function(el){
        el.focus();
      }

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
