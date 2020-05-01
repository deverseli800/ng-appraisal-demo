<template>
  <div>
    <a-row type="flex" align="middle">
      <a-col :span="12" :order="1">
        <a-card :bodyStyle="bodyStyles">
          <a-col :span="24" :order="3">
            <div class="logo">
              <h2>63 Depot Road, Huntington Station, NY 11746</h2>
            </div>
          </a-col>
        </a-card>
      </a-col>
      <a-col :span="6" :order="2">
        <a-tag color="green">Draft</a-tag>
      </a-col>
      <a-col :span="6" :order="3">
        <a-avatar size="large" src="https://res.cloudinary.com/vikas-real-estate/image/upload/w_100,/v1540812616/diana_zlatkina_qwwylo.png" />
        <a-avatar size="large" src="https://res.cloudinary.com/vikas-real-estate/image/upload/w_100,/v1540812624/lee_beckman_lguatv.png" />
      </a-col>
    </a-row>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      bodyStyles: {
      padding: 0,
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
