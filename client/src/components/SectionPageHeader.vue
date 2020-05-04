<template>
  <a-page-header
          @back="() => $router.go(-1)"
          :title="routeName"
          :subTitle="getCurrentStatus"
  >
    <template slot="extra">
      <a-button key="3" @click="toggleReviewStatus">Mark as {{reviewed ? 'unreviewed' : 'reviewed'}}</a-button>
      <a-button icon="book" :type="bookmarkType" @click="toggleButtonType" />
      <a-button type="primary" @click="goToNextRoute"> Next <a-icon type="arrow-right" /> </a-button>
    </template>
  </a-page-header>
</template>

<script>
    export default {
      name: "SiteDescriptionSection.vue",
      data() {
        return {
          reviewed: false,
          sendButtonDisable : false,
          bookmarkType: 'false',
        }
      },
      computed: {
        routeName() {
          console.log('our rotues', this.$route)
          return this.$route.name
        }
      },
      methods: {
        toggleReviewStatus () {
          this.reviewed = !this.reviewed;
        },
        getCurrentStatus () {
          return this.reviewed ? `Reviewed ${new Date().toISOString()}` : 'Unreviewed';
        },
        toggleButtonType () {
          if (this.bookmarkType === 'primary') {
            this.bookmarkType = 'null';
          } else {
            this.bookmarkType = 'primary';
          }
          this.$emit('bookmark-changed', 'yo')
        },
        goToNextRoute() {
          const reportRoutes = this.$router.options.routes[3].children
          const currentRouteIndex = reportRoutes.findIndex((element) => {
            return element.name === this.$route.name
          })
          this.$router.push(reportRoutes[currentRouteIndex+1])
        }
      }
    }
</script>

<style scoped>

</style>