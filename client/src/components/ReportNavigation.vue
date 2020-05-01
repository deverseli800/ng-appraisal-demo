<template>
  <a-layout-sider theme="light" width="300" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <div class="logo">
      <h2>{{ address }}</h2>
    </div>
    <a-menu mode="inline" :defaultSelectedKeys="['4']">

      <a-menu-item key="1" v-on:bookmark-changed="getStatus">
        <router-link to="/siteDescription">
          <a-icon type="bank" />
          <span class="nav-text">Site Description</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link to="/photos">
          <a-icon type="camera" />
          <span class="nav-text">Subject Property Photos</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="shop" />
        <span class="nav-text">Description of Improvements</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="dollar-o" />
        <span class="nav-text">Income Capitalization Approach</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    address : String
  },
  methods: {
    getStatus() {
      console.log('ahhhh')
    }
  }
}
</script>
