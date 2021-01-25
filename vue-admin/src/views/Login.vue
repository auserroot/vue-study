<!-- login -->
<template>
  <div class="login">
    <!-- 标题 -->
    <h1>后台管理系统</h1>

    <!-- 表单 -->
    <div class="element-from">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="submitForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="密码"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click.stop="onSubmit('submitForm')"
            class="element-from-btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <!-- 提示 -->
      <div class="login_bottom">
        <p>温馨提示</p>
        <p>未登录过的新用户，自动注册注册过的用户可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJs from "crypto-js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            min: 3,
            message: "请输入用户名至少3位字符",
            trigger: "blur",
          },
        ],

        password: [
          {
            required: true,
            min: 5,
            message: "请输入用户密码至少5位字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit(rform) {
      console.log(this.$refs[rform]);
      this.$refs[rform].validate((bool, obj) => {
        console.log(bool, obj);
        let username = this.ruleForm.username;
        let password = CryptoJs.HmacSHA1(
          this.ruleForm.password,
          "key"
        ).toString();
        this.$http
          .post("/admin/login", {
            user_name: username,
            password,
          })
          .then((res) => {
            console.log(res);
            if (res.status == "1") {
              // vuex 同步修改 状态中的数据
              this.$store.commit("LOGIN", res.status);

              //跳转页面
              this.$router.push({
                path: "/index",
              });
            }
          });
      });
    },
  },
};
</script>
<style lang='less' scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 318px;
  height: 500px;
  h1 {
    width: 100%;
    font-size: 34px;
    font-weight: 200;
    padding: 20px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }
  .element-from {
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    .element-from-btn {
      width: 100%;
    }
    .login_bottom {
      text-align: center;
      p {
        width: 196px;
        font-size: 14px;
        color: red;
        margin: 0 auto;
      }
      p:last-child {
        text-indent: 4px;
      }
    }
  }
}
</style>