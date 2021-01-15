<template>
  <input type="text" v-focus>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return{
      msg:1
    }
  },
  //自定义指令
  directives:{
    "focus":{
      bain:function(el,binding,vnode){
        console.log(el)
        console.log(binding)
        console.log(vnode)
      },
      inserted(el,binding,vnode){
        console.log(el)
        console.log(binding)
        console.log(vnode)
        el.focus();//聚焦事件
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
