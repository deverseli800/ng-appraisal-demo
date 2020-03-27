<template>
  <a-layout-sider theme="light" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <div class="logo">
      <h2>{{ address }}</h2>
    </div>
    <a-menu mode="inline" :defaultSelectedKeys="['4']">

      <a-menu-item key="1">
        <router-link to="/propertyDescription">
          <a-icon type="bank" />
          <span class="nav-text">Property Description</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="3">
        <router-link to="/photos">
          <a-icon type="camera" />
          <span class="nav-text">Photos</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="shop" />
        <span class="nav-text">Rent Comps</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="dollar-o" />
        <span class="nav-text">Pro Forma</span>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/capRateConclusion">
          <a-icon type="bar-chart" />
          <span class="nav-text">Cap Rate Conclusion</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    address : String
  }
}
</script>
