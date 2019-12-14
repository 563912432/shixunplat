<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="login-card">
      <div class="login-card-left">
        <el-carousel height="570px" arrow="never">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="card"><img src="../assets/carousel1.png" alt=""></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login-card-right">
        <div class="card-right-top">
          <div class="right-title">会计实操综训云平台</div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item class="username" prop="username">
              <el-input v-model="form.username" placeholder="用户名" clearable></el-input>
            </el-form-item>
            <el-form-item class="password" prop="password">
              <el-input type="password" v-model="form.password" placeholder="密码" clearable></el-input>
            </el-form-item>
          </el-form>
          <div class="button"><el-button type="primary" @click="login('form')">登 录</el-button></div>
        </div>
        <div class="card-right-bottom">
          忘记密码？
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (sessionStorage.getItem('isLogin')) {
      next({ path: '/' })
    } else {
      next()
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.username !== 'admin' && this.form.password !== '123456') {
            this.$message.error('用户名或者密码错误！')
          } else {
            sessionStorage.setItem('isLogin', 1)
            this.$router.push('/')
          }
        }
      })
    }
  }
}
</script>
<style>
  .login .el-input__inner {
    width: 295px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: 0;
  }
  .login .el-button {
    width: 295px;
  }
</style>
<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .logo {
      position: absolute;
      left: 20px;
      top: 20px;
      img {
        height: 40px;
        width: auto;
      }
    }
    .login-card {
      width: 985px;
      height: 570px;
      background-color: #fff;
      box-shadow: 3px 5px 12px 4px rgba(8, 175, 223, 0.54);
      border-radius: 5px;
      display: flex;
      .login-card-left{
        width: 550px;
        height: 100%;
        .card {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .login-card-right {
        width: 435px;
        flex: 1;
        display: flex;
        flex-direction: column;
        .card-right-top {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .right-title {
            color: #409EFF;
            font-size: 26px;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1.5px;
          }
          .username {
            margin-top: 70px;
          }
          .password {
            margin-top: 20px;
          }
          .button {
            margin-top: 30px;
          }
        }
        .card-right-bottom {
          padding: 20px 0;
          color: #909399;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
