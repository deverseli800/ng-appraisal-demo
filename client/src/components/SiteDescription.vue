<template>
  <div class="clearfix">
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Site Description">
      <hr>
    </a-page-header>
    <div v-for="category in categories" :key="category.name">
      <a-card :title="category.name">
        <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-card>
    </div>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  export default {
    data() {
      return {
        previewVisible: false,
        previewImage: '',
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
      };
    },
    methods: {
      handleCancel() {
        this.previewVisible = false;
      },
      async handlePreview(file) {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        this.previewImage = file.url || file.preview;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        this.fileList = fileList;
      },
    },
  };
</script>
<style>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>