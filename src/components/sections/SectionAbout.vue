<template>
  <div id="about" class="wrapper-section bg-blob-one">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="medium-8 cell">
          <h3 class="section-title">About</h3>
          <p class="section-summary">
            I’m extremely driven and highly enthusiastic about design and development, and love working with people. I
            constantly aim to help, encourage, and nurture people from all teams, and strive to learn as much as I can
            along the way.
          </p>
          <p>Some information on my achievements and interests:</p>
        </div>
      </div>
      <br />

      <feature-block title="Certifications" icon="award" :collection="certs"></feature-block>
      <br />
      <feature-block title="Awards" icon="trophy" :collection="awards"></feature-block>
      <br />
      <feature-block title="Current / Recent Courses" icon="award" :collection="learning"></feature-block>
      <br />
      <feature-block title="Interests" icon="music" :collection="interests"></feature-block>
      <br />
      <a class="btn" href="#skills">View my skills</a>
    </div>
  </div>
</template>

<script>
  import dataJson from '../../data/data.json'
  import FeatureBlock from '../elements/FeatureBlock.vue'

  export default {
    components: { FeatureBlock },
    data() {
      return {
        certs: [],
        awards: [],
        learning: [],
        interests: [],
      }
    },
    mounted() {
      this.certs = dataJson.certs
      this.awards = dataJson.awards
      this.learning = dataJson.learning
      this.interests = dataJson.interests
    },
  }
</script>
