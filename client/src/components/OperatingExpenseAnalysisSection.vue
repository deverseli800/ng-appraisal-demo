<template>
  <div>
    <a-card>
      <section-page-header></section-page-header>
      <div :style="{ margin: '16px', overflow: 'initial' }">
        <br />
        <p>We were not provided with ownership’s operating expenses since the property is currently owner-occupied.  Thus, we base our projections on our knowledge of similar modified gross leased office/industrial properties.</p>
        <h2>Estimated Operating Expenses</h2>
        <p>Our analysis as presented:</p>
        <h3> Real Estate Taxes </h3>
        <p>As we discussed, we utilize the forecasted real estate taxes of $33,125</p>
        <h3> Insurance </h3>
        <p>Since we are projecting modified gross lease terms, the landlord would be responsible for most of the insurance and the tenants may be required to carry an additional policy over this.  Thus, we projected this expense at $1.00 per square foot or $10,150 annually.</p>
        <h3> Repairs and Maintenance  </h3>
        <p>We also expect that the landlord would incur some general repairs and maintenance expenses for the subject.  We project this at $0.50 per square foot or $5,075 annually.</p>
        <h3> Miscellaneous  </h3>
        <p>The landlord would likely incur some small miscellaneous expenses as well.  We forecast this expense at $0.25 per square foot, or $2,538 annually</p>
        <h3> Replacement Reserves </h3>
        <p>This expense provides for the periodic replacement of building components that wear out more rapidly than the building itself and that must be replaced periodically during the building's economic life. The comparables did not report any reserve amounts as typically any reserves costs.  We have projected this expense at $0.50 per square foot or $5,075 annually.</p>
        <h3> Management Fee  </h3>
        <p>Management fees for commercial properties typically range from 2% to 6% of effective gross income in the local market. Given that this is a small property with two tenants, it is expected that management costs will be moderate. Therefore, we apply a 2.00% management fee, which equates to $4,785 annually.</p>
        <h3> Total Operating Expenses Current Date – Net of Taxes </h3>
        <p>Net of taxes, we forecast operating expenses at $27,622, or $2.72 per square foot. </p>
      </div>
    </a-card>
    <a-card>
      <h3>Reviewer Comments</h3>
      <a-mentions
              v-decorator="[
          'coders',
          {
            rules: [{ validator: checkMention }],
          },
        ]"
              rows="1"
              :style="{ height: '100px'}"
      >
        <a-mentions-option value="Lee">
          Lee
        </a-mentions-option>
        <a-mentions-option value="Diana">
          Diana
        </a-mentions-option>
      </a-mentions>
    </a-card>
  </div>

</template>

<script>
  import SectionPageHeader from "./SectionPageHeader";

    export default {
      name: "OperatingExpenseAnalysisSection.vue",
      components: {
        SectionPageHeader
      },
      data() {
        return {
          reviewed: false,
          sendButtonDisable : false,
          bookmarkType: 'false',
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