<template>
  <div>
    <a-card>
      <section-page-header></section-page-header>
      <div :style="{ margin: '16px', overflow: 'initial' }">
        <div v-for="category in categories" :key="category.name">
          <a-card :title="category.name">
            <a-upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    :fileList="fileList"
                    @preview="handlePreview"
                    @change="handleChange"
            >
            </a-upload>
          </a-card>
        </div>
      </div>
    </a-card>
    <a-card>
      <div>
        <a-card title="Inspection">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gTIUu_ROZ2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </a-card>
      </div>
    </a-card>
  </div>
</template>

<script>
  import SectionPageHeader from "./SectionPageHeader";
  export default {
    name: "SiteDescriptionSection.vue",
    components: {
      SectionPageHeader
    },
    data() {
      return {
        reviewed: false,
        sendButtonDisable : false,
        bookmarkType: 'false',
        categories: [
          { name: 'Building Facade' },
          { name: 'Street' },
          { name: 'Exterior Entrance' },
          { name: 'Typical Hallway' }
        ],
        fileList: [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://res.cloudinary.com/vikas-real-estate/image/upload/w_600,/v1583861384/byoe9vax75h57plx3vlb.png',
          },
          {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://res.cloudinary.com/vikas-real-estate/image/upload/w_600,/v1583861438/o571lk15m2eymmdqvb8e.png',
          },
          {
            uid: '-5',
            name: 'image.png',
            status: 'error',
          },
        ],
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
      }
    }
  }
</script>

<style scoped>

</style>