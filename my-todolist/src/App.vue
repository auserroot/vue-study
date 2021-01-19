<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @Additem='add' @selectALL="sALL"></todo-input>
    <div v-for="(item,index) in Showitems"  :key="item.id">
      <todo-content :item="item" :index = "index" @Remove="del"></todo-content>
    </div>
    <todo-footer :items="items" :list='list' :class="{u_line:addclass==this.list[index]}" @showItems='Showitem' @clearItem="clear"></todo-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Input from './components/Input'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'todo-header':Header,
    'todo-input':Input,
    'todo-content':Content,
    'todo-footer':Footer
  },
  computed:{
    Showitems(list){
      if(list=='ALL'){
          return this.items
      }else if(list=='Active'){
        this.items.filter((v)=>{
          return !v.done
        })
      }else if(list=='Active'){
        this.items.filter((v)=>{
          return v.done
        })
      }else{
        return this.items
      }
    },
  },
  data() {
    return {
      addclass:"All",
      list:['All','Active','Completed'],
      items:[
      {
        id:0,
        txt:'吃饭',
        done:false
      },
      {
        id:1,
        txt:'睡觉',
        done:false
      },
      {
        id:2,
        txt:'打豆豆',
        done:false
      },
      ]
    };
  },
  methods: {
    add(val){
      this.items.push({
        id:Date.now(),
        txt:val,
        done:false
      })
    },
    sALL(){
        this.items.filter(i=>{
        i.done=true
      })
    },
    del(index){
      this.items.splice(index,1)
    },

    clear(){
      this.items.filter(v=>{
        if(v.done){
          return !v.done
        }
      })
    },

     Showitem(list){
      if(list=='ALL'){
          return this.items
      }else if(list=='Active'){
        this.items.filter((v)=>{
          return !v.done
        })
      }else if(list=='Active'){
        this.items.filter((v)=>{
          return v.done
        })
      }
     },



     


    //选中样式
    All() {
        this.addclass = "All";
    },
    Active() {
        this.addclass = "Active";
    },
    Completed() {
        this.addclass = "Completed";
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.u_line{
  border:2px solid rgba(175, 47, 47, 0.2);
}
</style>
