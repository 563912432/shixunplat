<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
@font-face {
  /* font-properties */
  font-family: ping-fang-regular;
  src:url('../static/font/PingFangSCRegular.ttf')
}
#app {
  font-family: 'ping-fang-regular','Avenir', Helvetica, Arial, sans-serif;
  color: #101010;
  font-size: 16px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
