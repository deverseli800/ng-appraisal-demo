<template>
  <a-layout-sider theme="light" width="300" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <div class="logo">
      <h2>{{ address }}</h2>
    </div>
    <a-menu mode="inline" :defaultSelectedKeys="['4']">
      <a-menu-item v-for="item in $router.options.routes[3].children" :key="item.path">
        <router-link :to="item.path">
          <a-icon :type="item.icon" />
          <span class="nav-text">{{ item.name }}</span>
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
  },
}
</script>
