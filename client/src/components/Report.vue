<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <report-navigation address="Bowery"/>
    <a-layout :style="{ marginLeft: '300px'}">
      <a-layout-header :style="{ background: '#fff', padding: '0' }">
        <report-header></report-header>
      </a-layout-header>
      <a-layout-content :style="{ margin: '0', overflow: 'initial' }">
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
  import ReportNavigation from "./ReportNavigation";
  import ReportHeader from "./ReportHeader"

  export default {
    name: 'App',
    components: {
      ReportNavigation,
      ReportHeader
    },
  }

</script>
