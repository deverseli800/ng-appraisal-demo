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
      <a-col :span="12" :order="3">
        <a-col :span="10" :style="columnStyles">
          <a-tag color="green">Draft</a-tag>
          <a-tag>Narrative</a-tag>
        </a-col>
        <a-col :span="8" type="flex" align="right" :style="columnStyles">
          <a-popover title="Helen Peng, MAI" trigger="hover">
            <template slot="content">
              <ul>
                <li><a href="#" type="tel">Call</a></li><br/>
                <li><a href="#" type="email">Email</a></li>
              </ul>
            </template>
            <a-avatar size="large" src="https://res.cloudinary.com/vikas-real-estate/image/upload/w_100,/v1551119221/helen_peng_avatar_300x_sau6pd.png" />
          </a-popover>
          <a-popover title="Diana Zlatkina" trigger="hover">
            <template slot="content">
              <ul>
                <li><a href="#" type="tel">Call</a></li><br/>
                <li><a href="#" type="email">Email</a></li>
              </ul>
            </template>
            <a-avatar size="large" src="https://res.cloudinary.com/vikas-real-estate/image/upload/w_100,/v1540812616/diana_zlatkina_qwwylo.png" />
          </a-popover>
          <a-popover title="Lee Beckman" trigger="hover">
            <template slot="content">
              <ul>
                <li><a href="#" type="tel">Call</a></li><br/>
                <li><a href="#" type="email">Email</a></li>
              </ul>
            </template>
            <a-avatar size="large" src="https://res.cloudinary.com/vikas-real-estate/image/upload/w_100,/v1540812624/lee_beckman_lguatv.png" />

          </a-popover>
        </a-col>
        <a-col :span="4">
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                Message Appraisers
              </a-menu-item>
              <a-menu-item key="2">
                Rate This Appraisal
              </a-menu-item>
              <a-menu-item key="2">
                Download pdf
              </a-menu-item>
            </a-menu>
            <a-button> Actions <a-icon type="down" /> </a-button>
          </a-dropdown>
        </a-col>
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
      },
      columnStyles: {
        margin: '0 8px',
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

  .ant-dropdown-menu {
    max-width: 250px;
  }
</style>
