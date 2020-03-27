<template>
  <div>
    <a-row type="flex" align="middle">
      <a-col :span="6" :order="1">
        <a-card>
          <a-col :span="8" :order="3">
            Borough
            <br />
            <b>Brookyn</b>
          </a-col>
          <a-col :span="8" :order="1">
            Block
            <br />
            <b>400</b>
          </a-col>
          <a-col :span="8" :order="2">
            Lot
            <br />
            <b>17</b>
          </a-col>
        </a-card>
      </a-col>
      <a-col :span="9" :order="2">
        <a-card>
          <a-col :span="8" :order="3">
            GBA
            <br />
            <b>25,000 ft.</b>
          </a-col>
          <a-col :span="8" :order="1">
            Residential Units
            <br />
            <b>4</b>
          </a-col>
          <a-col :span="8" :order="2">
            Commercial Units
            <br />
            <b>2</b>
          </a-col>
        </a-card>
      </a-col>
      <a-col :span="9" :order="3">
        <a-card>
          <a-row type="flex" align="middle">
            <a-col :span="7">
              Cap Rate
              <br />
              <b>4.75%</b>
            </a-col>
            <a-col :span="7">
              Income Value
              <br />
              <b>$1,100,000</b>
            </a-col>
            <a-col :span="7">
              Sales Value
              <br />
              <b>$1,000,000</b>
            </a-col>
            <a-col :span="3">
              <a-tag color="green">Draft</a-tag>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
