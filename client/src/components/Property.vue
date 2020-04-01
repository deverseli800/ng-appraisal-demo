<template>
  <div>
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Property Description">
      <hr>
    </a-page-header>
    <a-col :span="16">
      <a-card title="Site Description" >
        <div>{{info}}</div>
        <a-form-model :model="form"  layout="vertical">
          <a-form-model-item label="As Is General Property Condition">
            <a-select placeholder="please select condition">
              <a-select-option v-for="condition in form.conditionOptions" :key="condition"
              >
                {{condition}}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="As Stabilized Assumed Property Condition">
            <a-select placeholder="please select condition">
              <a-select-option v-for="condition in form.conditionOptions" :key="condition"
              >
                {{condition}}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="Locations Inspected">
            <a-checkbox-group v-model="form.areasInspected">
              <a-checkbox value="1" name="type">
                Building Facade
              </a-checkbox>
              <a-checkbox value="2" name="type">
                Exterior Entrance
              </a-checkbox>
              <a-checkbox value="3" name="type">
                Interior Hallways
              </a-checkbox>
              <a-checkbox value="4" name="type">
                Common Areas
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="Observations">
            <a-checkbox-group v-model="form.observations">
              <a-checkbox value="1" name="type">
                We observed no hazardous substances on the improvements
              </a-checkbox>
              <a-checkbox value="2" name="type">
                We observed no adverse environmental or physical conditions
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="Inspection Date">
            <a-date-picker
                    v-model="form.date1"
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%;"
            />
          </a-form-model-item>
        </a-form-model>
      </a-card>
      <a-card title="Description of Improvements Upon Completion" >
        <a-form-model :model="siteInspection"  layout="vertical">
          <a-form-model-item label="Include in report">
            <a-switch v-model="siteInspection.includeInReport" @change="handleDisabledChange"/>
          </a-form-model-item>
          <a-form-model-item label="Foundation">
            <a-radio-group  :disabled="disabled" v-model="siteInspection.foundation">
              <a-radio value="1">
                Poured Concrete
              </a-radio>
              <a-radio value="2">
                Fieldstone
              </a-radio>
              <a-radio value="3">
                Other
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="Structural System">
            <a-radio-group  :disabled="disabled" v-model="siteInspection.structuralSystem">
              <a-radio value="1">
                Wood joists and masonry
              </a-radio>
              <a-radio value="2">
                Brick/masonry
              </a-radio>
              <a-radio value="3">
                Structural steel and concrete
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="Appraiser Commentary">
            <a-input v-model="form.desc" type="textarea" :disabled="disabled"/>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </a-col>
  </div>
</template>

<style>
  tr:last-child td {
    padding-bottom: 0;
  }
</style>


<script>
  import axios from 'axios';

  export default {
  name: 'Property',
  props: {
    formName: String
  },
  mounted() {
    console.log('come on and mount the horse!')
    axios
      .get('http://127.0.0.1:3000/posts')
      .then(response => {

        console.log('response');
        this.info = response
      })
  },
  data() {
    return {
      disabled: true,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      info: [],
      form: {
        name: '',
        conditionOptions: ['Fair', 'Satisfactory', 'Good', 'Excellent'],
        layout: 'vertical',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      siteInspection: {

      }
    };
  },
  methods: {
    handleDisabledChange() {
      this.disabled = !this.disabled;
    },
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
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
