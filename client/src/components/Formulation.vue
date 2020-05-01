<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <navigation address="535 Dean Street"/>
    <a-layout :style="{ marginLeft: '200px'}">
      <a-layout-header :style="{ background: '#fff', padding: '0' }">
        <key-details></key-details>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        ©2020 Bowery
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
<script>
  import Navigation from "./components/Navigation";
  import KeyDetails from "./components/KeyDetails"

  export default {
    name: 'App',
    components: {
      Navigation,
      KeyDetails
    },
  }

</script>
