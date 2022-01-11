<template>
  <div id="top" class="wrapper-section wrapper-section--lilac wrapper-section--wave-base bg-blob-hero u-pad-top">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="medium-7 align-self-middle cell animated fadeInUp">
          <h1 class="section-subtitle">Front-end Developer</h1>
          <h2 class="section-title section-title--large">Stuart Harland</h2>
          <p class="section-summary">
            Hi, I'm Stuart. I have over {{ getWorkYears }} years experience in development & design and I'm
            well-disciplined in the development lifecycle; producing websites & applications that not only meet the
            needs of the client, but importantly create a clean, engaging, and accessible experience for all users.
          </p>

          <ul class="menu feature-skill-icons simple">
            <li v-for="skill in skillPreview" :key="skill.item">
              <span :class="skill.item"></span>
            </li>
          </ul>

          <a class="btn" href="#about">Find out more</a>
        </div>
        <div class="medium-5 align-self-middle text-right cell">
          <img
            class="img-intro anim-title"
            alt="Illustration of person at a laptop"
            src="@/assets/img/svgs/ill-1.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skillPreview: [
          { item: 'sh-icon-html5' },
          { item: 'sh-icon-javascript' },
          { item: 'sh-icon-sass' },
          { item: 'sh-icon-accessibility' },
        ],
      }
    },
    computed: {
      getWorkYears() {
        const dateCurr = new Date().getFullYear()
        const dateStart = new Date('2002', '1', '1').getFullYear()
        const diffYears = dateCurr - dateStart
        return diffYears
      },
    },
  }
</script>
