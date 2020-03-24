<template>
  <div>
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Cap Rate Conclusion">
      <hr>
    </a-page-header>
    <a-card title="Cap Rate Conclusion">
      <a-table :columns="surveyColumns" :dataSource="surveyData" bordered :pagination="false">
        <template slot="name" slot-scope="text">
          <a>{{text}}</a>
        </template>
      </a-table>
      <br />
      <a-form-model-item label="Appraiser Commentary">
        <a-input type="text"/>
      </a-form-model-item>
    </a-card>
    <a-card title="Cap Rate Conclusion Summary Table">
      <a-row>
        <a-col :span="2">
          <a-button class="editable-add-btn" @click="handleAdd">+ New Adjustment</a-button>
        </a-col>
        <a-col :span="3" :push="20">
          <a-select placeholder="please select condition" :defaultValue="roundingFactors[1]">
            <a-select-option  v-for="roundingFactor in roundingFactors" :key="roundingFactor"
            >
              {{roundingFactor}}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-table bordered :dataSource="dataSource" :columns="columns" :pagination="false">
        <template slot="name" slot-scope="text, record">
          <editable-cell :text="text" @change="onCellChange(record.key, 'value', $event)" />
        </template>
      </a-table>
    </a-card>
  </div>
</template>
<script>
  const EditableCell = {
    template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
    props: {
      text: String,
    },
    data() {
      return {
        value: this.text,
        editable: false,
      };
    },
    methods: {
      handleChange(e) {
        const value = e.target.value;
        this.value = value;
      },
      check() {
        this.editable = false;
        this.$emit('change', this.value);
      },
      edit() {
        this.editable = true;
      },
    },
  }
  export default {
    components: {
      EditableCell,
    },
    data() {
      return {
        roundingFactors: [
          '$10,000',
          '$25,000',
          '$50,000',
          '$100,000',
        ],
        dataSource: [
          {
            key: '0',
            value: 'Net Operating Income (NOI',
            timePeriod: '',
            amount: '$184,415.35',
            finalValue: ''
          },
          {
            key: '1',
            value: 'Concluded Cap Rate',
            timePeriod: '',
            amount: '4.5%',
            finalValue: '400'
          },
          {
            key: '2',
            value: 'Capatalization Conclusion',
            timePeriod: '',
            amount: '$4,098,119',
            finalValue: '$4,100,000'
          },
        ],
        surveyData: [
          {
            key: '0',
            survey: 'Band of Investment',
            overallCapRate: '5.17%',
          },
          {
            key: '1',
            survey: 'PwC',
            overallCapRate: '3.5-7%',
          },
          {
            key: '2',
            survey: 'Situs - RERC',
            overallCapRate: '4.2-6%',
          },
          {
            key: '3',
            survey: 'Situs - RERC',
            overallCapRate: '2.94-6%',
          },
        ],
        surveyColumns: [
          {
            title: 'Survey',
            dataIndex: 'survey',
          },
          {
            title: 'Overall Cap Rate',
            dataIndex: 'overallCapRate',
          },
        ],
        count: 2,
        columns: [
          {
            title: 'Value',
            dataIndex: 'value',
            width: '30%',
            scopedSlots: { customRender: 'value' },
          },
          {
            title: 'Time Period',
            dataIndex: 'timePeriod',
          },
          {
            title: 'Amount',
            dataIndex: 'amount',
          },
          {
            title: 'Final Value (RD)',
            dataIndex: 'finalValue',
          },
        ],
      };
    },
    methods: {
      onCellChange(key, dataIndex, value) {
        const dataSource = [...this.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
          target[dataIndex] = value;
          this.dataSource = dataSource;
        }
      },
      onDelete(key) {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter(item => item.key !== key);
      },
      handleAdd() {
        const { count, dataSource } = this;
        const newData = {
          key: count,
          value: `New Adjustment`,
          timePeriod: '',
          amount: 0,
        };
        this.dataSource = [...dataSource, newData];
        this.count = count + 1;
      },
    },
  };
</script>
<style>
  .editable-cell {
    position: relative;
  }

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
</style>