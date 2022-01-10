<template>
  <div id="skills" class="wrapper-section wrapper-section--lilac wrapper-section--wave-top  wrapper-section--wave-base">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="medium-8 cell">
          <h3 class="section-title">Skills</h3>
          <p>
            I love to keep learning. I've worked with classic ASP, C#, JavaScript, and currently love SCSS, Vue.js, and
            React. I'm also deeply interested in improving accessibility for all users - it's a primary focus for me.
          </p>
          <p>
            Here's an overview of some of the skills I've picked up on my career journey:
          </p>
          <br />
        </div>
      </div>

      <!-- skill grid -->
      <div class="feature-block">
        <div v-if="skills && skills.length > 0" class="grid-x grid-padding-x medium-up-2 block-skills">
          <div v-for="(skill, index) in skills" :key="index" class="cell">
            <p>
              <span>{{ skill.name }}</span> <span :class="skill.icon"></span>
            </p>
          </div>
        </div>
      </div>

      <br />
      <a class="btn" href="#work">View my work</a>
    </div>
  </div>
</template>

<script>
  import dataJson from '../../data/data.json'

  export default {
    data() {
      return { skills: [] }
    },
    mounted() {
      this.skills = dataJson.skills
    },
  }
</script>

<style>
  @media screen and (max-width: 39.9375em) {
    .block-skills p {
      align-content: center;
      align-items: flex-start;
    }

    .block-skills p {
      font-size: 1rem;
    }

    .block-skills [class^='sh-'] {
      padding-top: 0.5rem;
      margin-right: 0rem;
    }
  }
</style>
