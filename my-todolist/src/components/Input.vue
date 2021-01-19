<!-- header -->
<template>
<div>
    <span @click="selectall" title="点击全选/取消">﹀</span>
    <input type="text" v-focus v-model="val" placeholder="what noodes to be done?" @keydown.enter="additem">
</div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
data() {
//这里存放数据
return {
    val:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    additem(){
        this.$emit('Additem',this.val)
        this.val=""
        // console.log(this.val)
    },
    selectall(){
        this.$emit('selectALL')
    }
}
}
</script>
<style scoped>
    div{
        width: 550px;
        height: 70px;
        margin: 0 auto;
        border: 1px solid rgb(230, 230, 230);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        width: 50px;
        height: 100%;
        font-size: 20px;
        font-weight: bold;
        line-height: 70px;
        color: rgb(230, 230, 231);
        cursor: pointer;
    }
    input{
        width: 480px;
        height: 100%;
        font-size: 40px;
        border: none;
        outline: none;
    }
    input::-webkit-input-placeholder{
        font-size: 40px;
        line-height: 40px;
        font-style: italic;
        color: rgb(230, 230, 231);
    }
</style>