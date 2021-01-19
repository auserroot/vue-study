<!-- header -->
<template>
<div>
    <input type="checkbox" v-model='item.done' class="Checkbox">
    <span :class="{line:item.done}">{{item.txt}}</span>
    <button @click="remove(index)">X</button>
</div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
props:["item","index"],
components: {},
data() {
//这里存放数据
return {
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    remove(index){
        this.$emit("Remove",index)
    }
}
}
</script>
<style scoped> 
div{
    width: 550px;
    height: 70px;
    border: 1px solid rgb(204, 154, 154);
    position: relative;
    margin: 0 auto;
}
.Checkbox{
    position:absolute;
    top: 15px;
    left: 10px;
    width: 40px;
    height: 40px;
    outline: none;
    border: 1px solid rgb(204, 154, 154);
    border-radius: 50%;
    background-color:#DEDEDE;
    cursor: pointer;
    -webkit-border-radius:50%;
	border-radius:50%;
	display:inline-block;
	vertical-align:top;
	-webkit-appearance:none;
	-webkit-user-select:none;
	user-select:none;
	-webkit-transition:background-color ease 0.1s;
	transition:background-color ease 0.1s;
} 
.Checkbox:checked {
    background-color:#DEDEDE;
}
.Checkbox:checked::after {
    content: "";
    position: absolute;
    left: 4px;
    top:4px;
    width: 24px;
    height: 12px;
    border: 2px solid rgb(204, 154, 154);
    border-top-color: transparent;
    border-right-color: transparent; 
    transform: rotate(-45deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
}
span{
    display: inline-block;
    width: 432px;
    height: 100%;
    font-size: 30px;
    line-height: 66px;
    text-align: left;
    color:  rgb(77, 77, 77);
}
button{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 70px;
    height: 70px;
    font-size: 40px;
    color: rgb(204, 154, 154);
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    visibility: hidden;
}
div:hover button{
    visibility: visible;
}

.line{
  color:  rgb(230, 230, 230);
  text-decoration:line-through;
}
</style>