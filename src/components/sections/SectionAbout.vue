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
      <feature-block title="Interests" icon="music" :collection="interests"></feature-block>
      <br />
      <feature-block title="Current / Recent Courses" icon="award" :collection="learning"></feature-block>

      <br />
      <a class="btn" href="#skills">View my skills</a>
    </div>
  </div>
</template>

<script>
  import FeatureBlock from '../elements/FeatureBlock.vue'

  export default {
    components: { FeatureBlock },
    data() {
      return {
        certs: [
          {
            name: 'Microsoft',
            details: 'Microsoft Certified Solutions Developer - MCSD',
          },
          {
            name: 'Microsoft',
            details: 'Programming with JavaScript & CSS3 - Specialist',
          },
          {
            name: 'Kentico',
            details: 'Kentico Certified Developer',
          },
        ],
        learning: [
          {
            name: 'Interaction Design Foundation',
            details: 'IxD School - 2021 to present',
          },
          {
            name: 'Vue.js 3',
            details: 'Vue School - 2021 to present',
          },
          {
            name: 'Nuxt.js',
            details: 'Mastering Nuxt - 2021 to present',
          },
          {
            name: 'React Front-To-Back 2021',
            details: 'Udemy 2021-2022 (completed)',
          },
          {
            name: 'Management Academy',
            details: 'News UK - 2021 (completed)',
          },
          {
            name: 'Web Accessibility',
            details: 'Udacity - 2020 (completed)',
          },
        ],
        awards: [
          {
            name: 'Paul Sandhu Memorial Award',
            details: 'Best IT Project',
          },
          {
            name: 'Opera N.I. Shield',
            details: 'NI Media Student of the Year',
          },
        ],
        interests: [
          {
            name: 'Music',
            details:
              'Listening, writing, and recording. I’ve been lucky to have released a few albums with bands I’ve been in, and had the opportunity to play gigs and festivals around Germany, Austria, UK, and Ireland.',
          },
          {
            name: 'Painting',
            details:
              'I really enjoy building and painting models & miniatures. I have only been doing this for the last few years, but it’s a fantastic way to relax.',
          },
          {
            name: 'Films',
            details: 'I’m a huge movie addict and enjoy getting together with friends to watch and discuss films.',
          },
        ],
      }
    },
  }
</script>
