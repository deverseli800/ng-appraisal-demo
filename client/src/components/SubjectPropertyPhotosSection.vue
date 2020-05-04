<template>
    <a-card>
      <section-page-header></section-page-header>
      <div :style="{ margin: '16px', overflow: 'initial' }">
        <a-card>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.032056785774!2d-73.4117609845908!3d40.84921997931732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e828f32ed23fa5%3A0x265d1726e718d06b!2s63%20Depot%20Rd%2C%20Huntington%20Station%2C%20NY%2011746!5e0!3m2!1sen!2sus!4v1588262564704!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </a-card>
        <br />
        <a-row>
          <a-col :span="4">
            <h4>
              Location
              <a-button shape="circle" icon="search" />
            </h4>
          </a-col>
          <a-col :span="20">
            <p>
              63 Depot Road is located on Depot Road between 1st Avenue and East Pulaski Road in the hamlet of Huntington Station within Huntington Township in Suffolk County in the State of NY.   The subject has a good location near the center of town in a mostly commercial area.
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Surrounding Land uses</h4></a-col>
          <a-col :span="20">
            <p>
              Surrounding land uses include office, retail and industrial buildings.
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Easements, Encroachments, and Restrictions</h4></a-col>
          <a-col :span="20">
            <p>
              None.
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Site Area</h4></a-col>
          <a-col :span="20">
            <p>
              0.720± acres./ 31,363± square feet
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Shape</h4></a-col>
          <a-col :span="20">
            <p>Irregular, through-block site</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Frontage</h4></a-col>
          <a-col :span="20">
            <p>Depot Road (150.0 feet) and 1st Avenue (100.0 feet)</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="4"><h4>Topography</h4></a-col>
          <a-col :span="20">
            <p>Generally level</p>
          </a-col>
        </a-row>
      </div>
    </a-card>
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