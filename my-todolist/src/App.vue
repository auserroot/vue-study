<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @Additem='add' @selectALL="sALL"></todo-input>
    <div v-for="(item,index) in Showitems"  :key="item.id">
      <todo-content :item="item" :index = "index" @Remove="del"></todo-content>
    </div>
    <todo-footer :items="items"   @showItems='Showitem'  @clearItem="clear"></todo-footer>
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
    Showitems(){
      if(this.tab==='All'){
          return this.items
      }else if(this.tab==='Active'){
        return this.items.filter((v)=>{
          return !v.done
        })
      }else if(this.tab==='Completed'){
        return this.items.filter((v)=>{
          return v.done
        })
      }
    },
  },
  data() {
    return {
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
      ],
      tab:'All'
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
        i.done=!i.done
      })
    },
    del(index){
      this.items.splice(index,1)
    },

    clear(){
      this.items =  this.items.filter(v=>{
        return !v.done
      })
    },

    Showitem(listitem){
      this.tab=listitem   
    },

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

</style>
