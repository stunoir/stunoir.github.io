<template>
  <div id="work" class="wrapper-section bg-blob-two">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="medium-8 cell">
          <h3 class="section-title">Work</h3>
          <p class="section-summary">A sample of {{ getTotalWork }} recent bits of fun:</p>
        </div>
      </div>
      <br />

      <!-- work grid -->
      <div v-if="work && work.length > 0" class="grid-x grid-padding-x medium-up-2 large-up-3">
        <div v-for="(item, index) in work" :key="index" class="cell">
          <a :href="item.url" class="work-card">
            <div class="img" v-bind:style="{ 'background-image': 'url(' + item.img + ')' }"></div>
            <div class="content">
              <p class="title">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dataJson from '../../data/data.json'

  export default {
    computed: {
      getTotalWork() {
        return this.work.length
      },
    },
    data() {
      return { work: [] }
    },
    mounted() {
      this.work = dataJson.work
    },
  }
</script>

<style scoped>
  .wrapper-section {
    padding-bottom: 7rem;
  }

  @media screen and (max-width: 39.9375em) {
    .wrapper-section {
      padding-bottom: 3rem;
    }
  }
</style>
