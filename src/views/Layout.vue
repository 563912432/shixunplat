<template>
  <div class="layout">
    <div class="top">
      <div class="top-left"><img src="../assets/logo.png" alt=""></div>
      <div class="top-right">
        <span>15275969278</span>
        <span class="ml-20">
          <el-avatar v-if="avatar" :size="40">
            <img :src="avatar"/>
          </el-avatar>
          <el-avatar v-else :size="40">
            <i class="el-icon-s-custom" style="font-size: 20px;margin-top: 10px"></i>
          </el-avatar>
        </span>
        <span class="ml-20">
          <el-badge :value="messageNumber" class="item">
            <i class="el-icon-bell" style="font-size: 24px"></i>
          </el-badge>
        </span>
        <span class="ml-20" style="font-size: 20px">退出</span>
      </div>
    </div>
    <div class="main">
      <el-scrollbar class="scroll-wrapper">
        <div class="main-left" :class="!isCollapse?'wid240':'wid64'">
            <el-menu
              :collapse="isCollapse"
              :router="true"
              default-active="index"
              class="el-menu-vertical-demo">
              <el-menu-item index="index">
                <i class="el-icon-menu font-20"></i>
                <span slot="title" class="font-16">实训首页</span>
              </el-menu-item>
              <el-menu-item index="video">
                <i class="el-icon-video-camera font-20"></i>
                <span slot="title" class="font-16">视频课程</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-s-release font-20"></i>
                <span slot="title" class="font-16">出纳实训</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-receiving font-20"></i>
                  <span class="font-16">网银实训</span>
                </template>
                <el-menu-item index="4-1" class="font-16">商业-小规模</el-menu-item>
                <el-menu-item index="4-2" class="font-16">商业-一般纳税人</el-menu-item>
                <el-menu-item index="4-3" class="font-16">工业</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-s-marketing font-20"></i>
                  <span class="font-16">做账实训</span>
                </template>
                <el-menu-item index="5-1" class="font-16">商业-小规模</el-menu-item>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-s-claim font-20"></i>
                  <span class="font-16">纳税申报</span>
                </template>
                <el-menu-item index="6-1" class="font-16">商业-小规模</el-menu-item>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-s-data font-20"></i>
                  <span class="font-16">个税申报</span>
                </template>
                <el-menu-item index="7-1">商业-小规模</el-menu-item>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-date font-20"></i>
                  <span class="font-16">汇算清缴</span>
                </template>
                <el-menu-item index="8-1">商业-小规模</el-menu-item>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-notebook-2 font-20"></i>
                  <span class="font-16">工商年报</span>
                </template>
                <el-menu-item index="9-1">商业-小规模</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-data-analysis font-20"></i>
                  <span class="font-16">Excel</span>
                </template>
                <el-menu-item index="10-1" class="font-16">商业-小规模</el-menu-item>
              </el-submenu>
              <div class="collapse">
                <i v-if="!isCollapse" class="el-icon-s-fold font-20 pointer" @click="isCollapse = !isCollapse"></i>
                <i v-else class="el-icon-s-unfold font-20 pointer" @click="isCollapse = !isCollapse"></i>
              </div>
            </el-menu>
        </div>
      </el-scrollbar>
      <div class="main-right">
        <el-scrollbar class="scroll-wrapper-main">
          <router-view></router-view>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'layout',
  components: {},
  data () {
    return {
      // avatar: 'http://www.wenyunjy.com/Uploads/20171125/5a19297d97a9a.png',
      avatar: '',
      messageNumber: 9,
      isCollapse: false
    }
  }
}
</script>
<style>
  .layout .el-badge__content {
    border: none;
  }
  .layout .scroll-wrapper {
    border-right: solid 1px #e6e6e6;
  }
  .layout .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .layout .el-menu {
    border-right: none;
  }
</style>
<style scoped lang="scss">
  .pointer {
    cursor: pointer;
  }
  .wid240 {
    width: 240px!important;
  }
  .wid64 {
    width: 64px!important;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .font-20 {
    font-size: 20px;
  }
  .font-16 {
    font-size: 16px;
  }
  .layout {
    min-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top {
      height: 70px;
      background-color: #409EFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      .top-left {
        img {
          height: 45px;
          width: auto;
        }
      }
      .top-right {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #ffffff;
      }
    }
    .main {
      flex: 1;
      display: flex;
      overflow-y: auto;
      .main-left {
        width: 240px;
        .collapse {
          height: 56px;
          text-align: center;
          line-height: 56px;
          border-top: solid 1px #eeeeee;
          border-bottom: solid 1px #eeeeee;
          color: #666666;
        }
      }
      .main-right {
        flex: 1;
        height: 100%;
        background-color: #F5F6FA;
        .scroll-wrapper-main {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
