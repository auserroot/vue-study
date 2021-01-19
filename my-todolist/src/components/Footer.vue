<!-- footer -->
<template>
<div>
    <span>{{items.length|itemfliter}}</span>
    <button v-for="(v,index) in list" :key="index"  @click="showitem(index)">{{v}}</button>
    <button class="btn0" @click="clearitem" v-show="items.length > 0">clearCompleted</button>
</div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['items','list'],
data() {
//这里存放数据
return {
    // addclass:"All",
    // list:['All','Active','Completed'],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//过滤器
filters: {
itemfliter(v) {
    return v + " " + "item left";
}
},
//方法集合
methods: {
    showitem(){
        this.$emit('showItems')
    },
    clearitem(){
        this.$emit('clearItem')
    },
    
}
}
</script>
<style scoped>
div{
    margin: 0 auto;
    text-align: left;
    width: 550px;
    height: 40px;
    line-height: 40px;
    color: rgb(119, 119, 119);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.4),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.5);
}
div span{
    display: inline-block;
    width: 180px;
    text-indent: 12px;
}
div button{
    border: none;
    outline: none;
    color: rgb(119, 119, 119);
    background: #fff;
    margin:0 10px;
}
div .btn0{
    margin-left: 70px;
}

</style>