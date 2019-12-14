<template>
  <div class="video">
    <div class="video-left">
      <el-scrollbar class="scroll-wrapper">
        <div></div>
      </el-scrollbar>
    </div>
    <div class="video-right">
      123123
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-video'
}
</script>

<style>
  .video .scroll-wrapper {
    height: 100%;
  }
</style>
<style scoped lang="scss">
  .video {
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    .video-left {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow-y: auto;
      width: 230px;
      background-color: #ffffff;
    }
  }
</style>
