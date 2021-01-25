<!-- Dashboard -->
<template>
  <div class="index-dashboard">
    <!-- left nav -->
    <div class="dashboard_left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#1f2d3d"
        text-color="#fff"
        active-text-color="#4a84bd"
      >
        <el-submenu
          v-for="(submenus, index) in submenus"
          :index="String(index + 1)"
          :key="submenus.id"
          :route="submenus.path"
        >
          <template slot="title">
            <i :class="submenus.class"></i>
            <span>{{ submenus.title }}</span>
          </template>
          <el-menu-item
            v-for="(item, subIndex) in submenus.menus"
            :index="index + 1 + '-' + (subIndex + 1)"
            :key="item.id"
            :route="item.path"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!-- right -->
    <div class="dashboard_right">
      <!-- right-header -->
      <div class="r-header">
        <div class="h-left">
          <span>首页</span>
        </div>
        <div class="h-right" @mouseover="adddownlist">
          <img
            src="http://linweiqin.cn/shopadmin/img/default.fda40604.jpg"
            alt=""
          />
          <div class="downlist" v-show="showlist" @mouseout="deldownlist">
            <span @click="toindex">首页</span>
            <span @click="singout">退出</span>
          </div>
        </div>
      </div>
      <!-- 数据统计 -->
      <div class="center">
        <h2>数据统计</h2>
        <!-- 数据详情 -->
        <div class="numinfo">
          <div class="info-item" v-for="item in items" :key="item.id">
            <div class="item">
              <span>{{ item.txt }}:</span>
              <span :class="[item.num === 0 ? 'num1' : 'num']">{{
                item.num
              }}</span>
            </div>
            <div class="item">
              <span>{{ item.item.txt }}:</span>
              <span :class="[item.item.num === 0 ? 'num1' : 'num']">{{
                item.item.num
              }}</span>
            </div>
          </div>
        </div>
        <!-- 数据趋势图 -->
        <div
          class="info-canvas"
          :admin="admin"
          :date="date"
          :customer="customer"
          :order="order"
        >
          <vue-echarts></vue-echarts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from "../components/Echarts.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "vue-echarts": Echarts,
  },
  data() {
    //这里存放数据
    return {
      showlist: false,
      submenus: [
        {
          id: 1,
          title: "首页",
          menus: [],
          class: "el-icon-menu",
          path: "/index",
        },
        {
          id: 2,
          title: "数据管理",
          menus: [
            {
              id: 1,
              title: "用户列表",
              path: "",
            },
            {
              id: 2,
              title: "商家列表",
              path: "",
            },
            {
              id: 3,
              title: "食品列表",
              path: "",
            },
            {
              id: 4,
              title: "订单列表",
              path: "",
            },
            {
              id: 5,
              title: "管理员列表",
              path: "",
            },
          ],
          class: "el-icon-document",
        },
        {
          id: 3,
          title: "添加数据",
          menus: [
            {
              id: 1,
              title: "添加商铺",
              path: "",
            },
            {
              id: 2,
              title: "添加食品",
              path: "",
            },
          ],
          class: "el-icon-plus",
        },
      ],
      items: [
        {
          id: 1,
          txt: "总用户量",
          num: 0,
          item: {
            txt: "注册用户",
            num: 17,
          },
        },

        {
          id: 2,
          txt: "总订单量",
          num: 0,
          item: {
            txt: "新增订单",
            num: 13,
          },
        },

        {
          id: 3,
          txt: "管理员",
          num: 587,
          item: {
            txt: "新增管理员",
            num: 6,
          },
        },
      ],
      date: [],
      customer: [],
      order: [],
      admin: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    adddownlist() {
      this.showlist = true;
    },
    deldownlist() {
      this.showlist = false;
    },
    toindex() {
      //点击跳转主页
      this.$router.history.push({
        path: "/index",
      });
    },
    singout() {
      this.$http.get("admin/signout").then((res) => {
        console.log(res);
        if (res.status == 1) {
          console.log("退出成功！");
          //点击跳转登录页
          this.$router.history.push({
            path: "/",
          });
        }
      });
    },
  },
  mounted() {
    window.onload = function () {
      console.log(1);
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate();
      console.log(year, month, day);
      for (let i = 7; i >= 0; i--) {
        let datetime = year + "-" + month + "-" + day;
        this.date[i] = datetime;
        day--;
        console.log(this.date);
      }
      // let datetime = year + "-" + month + "-" + day;
      // this.date = datetime;
      console.log(this.date);
      //   this.$http.get("statis/user/:date/count", {
      //     date: this.date,
      //   });
    };
  },
};
</script>
<style lang='less' scoped>
.index-dashboard {
  display: flex;
  height: 100%;
  background: #eff2f7;
  .dashboard_left {
    height: 100%;
    min-width: 200px;
  }
  .el-menu {
    height: 100%;
    border: none;
  }
  .dashboard_right {
    height: 100%;
    width: 100%;
    .r-header {
      display: flex;
      justify-content: space-between;
      background: #eff2f7;
      width: 100%;
      height: 60px;
      padding: 0 20px;
      .h-left {
        font-size: 14px;
        line-height: 60px;
      }
      .h-right {
        width: 36px;
        height: 36px;
        margin-top: 10px;
        position: relative;
        cursor: pointer;
        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .downlist {
          position: absolute;
          top: 100%;
          left: -50%;
          padding: 10px 0;
          margin: 5px 0;
          background-color: #fff;
          border: 1px solid #ebeef5;
          border-radius: 4px;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
          span {
            display: block;
            width: 68px;
            line-height: 36px;
            padding: 0 20px;
            font-size: 14px;
            color: #606266;
            cursor: pointer;
          }
        }
      }
    }
  }
  .center {
    background: #ffffff;
    text-align: center;
    h2 {
      font-size: 30px;
      font-weight: 200;
      height: 50px;
      line-height: 50px;
    }
    .numinfo {
      display: flex;
      .info-item {
        display: flex;
        flex: 1;
        height: 80px;
        text-align: center;
        justify-content: center;
        border: 1px solid #ddd;
        .item {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin: 0 auto;
          .num {
            font-size: 30px;
            font-weight: 200;
            color: #ff9800;
          }
          .num1 {
            font-size: 30px;
            font-weight: 200;
            color: #20a0ff;
          }
        }
      }
    }
    .info-canvas {
      width: 100%;
      height: 480px;
      padding-top: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
