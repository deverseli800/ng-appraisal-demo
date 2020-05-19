<template>
    <a-card>
      <section-page-header></section-page-header>
      <div :style="{ margin: '16px', overflow: 'initial' }">
        <h4 :style="{ textAlign: 'center' }">Forecasted Pro Forma</h4>
        <div class="table-operations">
          <a-row type="flex" justify="end">
            <a-col :span="4" type="flex" align="right">
              <a-button-group class="ant-btn-group" size="small">
                <a-button :type="getType('per unit')" @click="switchUnitOfComparison">Per Unit</a-button>
                <a-button :type="getType('psf')" @click="switchUnitOfComparison">
                  PSF
                </a-button>
              </a-button-group>
            </a-col>
          </a-row>
          <br />
        </div>
        <a-table :columns="columns" :data-source="dataSource" @change="handleChange"></a-table>
      </div>
    </a-card>
</template>

<script>
  import SectionPageHeader from "./SectionPageHeader";

    export default {
      name: "StabilizedIncomeAndExpensesSection.vue",
      components: {
        SectionPageHeader
      },
      data() {
        return {
          reviewed: false,
          sendButtonDisable : false,
          bookmarkType: 'false',
          unitOfComparison: 'psf',
          gba: 10150,
          dataSource: [
            {
              name: 'Real Estate Taxes',
              amount: '$33,125',
              basis: '$3.26',
            },
            {
              name: 'Insurance',
              amount: '$10,150',
              basis: '$1.00',
            },
            {
              name: 'Repairs & Maintenance',
              amount: '$5,075',
              basis: '$0.50',
            },
            {
              name: 'General, Admin & Misc',
              amount: '$2,538',
              basis: '$0.25',
            },
            {
              name: 'Reserves',
              amount: '$5,075',
              basis: '$0.50',
            },
            {
              name: 'Total Operating Expenses',
              amount: '$60,748',
              basis: '$5.99',
            },
          ],
          psfDataSource: [
            {
              name: 'Real Estate Taxes',
              amount: '$33,125',
              basis: '$3.26',
            },
            {
              name: 'Insurance',
              amount: '$10,150',
              basis: '$1.00',
            },
            {
              name: 'Repairs & Maintenance',
              amount: '$5,075',
              basis: '$0.50',
            },
            {
              name: 'General, Admin & Misc',
              amount: '$2,538',
              basis: '$0.25',
            },
            {
              name: 'Reserves',
              amount: '$5,075',
              basis: '$0.50',
            },
            {
              name: 'Total Operating Expenses',
              amount: '$60,748',
              basis: '$5.99',
            },
          ],
          count: 2,
          columns: [
            {
              title: 'Expense',
              dataIndex: 'name',
              width: '30%',
              scopedSlots: { customRender: 'name' },
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
            },
            {
              title: '$ / psf',
              dataIndex: 'basis',
            },
          ],
          psfColumns: [
            {
              title: 'Expense',
              dataIndex: 'name',
              width: '30%',
              scopedSlots: { customRender: 'name' },
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
            },
            {
              title: '$ / psf',
              dataIndex: 'basis',
            },
          ],
          perUnitColumns: [
            {
              title: 'Expense',
              dataIndex: 'name',
              width: '30%',
              scopedSlots: { customRender: 'name' },
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
            },
            {
              title: '$ / unit',
              dataIndex: 'basis',
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
        },
        getType(buttonType) {
          if (buttonType === 'psf' && this.unitOfComparison === 'psf') {
            return 'primary'
          } else if (buttonType === 'per unit' && this.unitOfComparison === 'per unit') {
            return 'primary'
          }
        },
        switchUnitOfComparison () {
          const perUnitDataSource = [
            {
              name: 'Real Estate Taxes',
              amount: '$33,125',
              basis: '$16,562',
            },
            {
              name: 'Insurance',
              amount: '$10,150',
              basis: '$5,075',
            },
            {
              name: 'Repairs & Maintenance',
              amount: '$5,075',
              basis: '$2,537',
            },
            {
              name: 'General, Admin & Misc',
              amount: '$1,269',
              basis: '$6.34',
            },
            {
              name: 'Reserves',
              amount: '$5,075',
              basis: '$2,537',
            },
            {
              name: 'Total Operating Expenses',
              amount: '$60,748',
              basis: '$30,374',
            },
          ]
          const newBasis = this.unitOfComparison === 'psf' ? 'per unit' : 'psf';
          const newDataSource = this.unitOfComparison === 'psf' ? perUnitDataSource : this.psfDataSource;
          this.columns = this.unitOfComparison === 'psf' ? this.perUnitColumns : this.psfColumns;
          this.unitOfComparison = newBasis;
          this.dataSource = newDataSource;
        },
      }
    }
</script>

<style scoped>
  #components-button-demo-button-group > h4 {
    margin: 16px 0;
    font-size: 14px;
    line-height: 1;
    font-weight: normal;
  }
  #components-button-demo-button-group > h4:first-child {
    margin-top: 0;
  }
 .ant-btn-group {
    margin-right: 8px;
  }
</style>