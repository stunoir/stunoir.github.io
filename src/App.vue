<template>
  <the-header></the-header>
  <main id="main-content">
    <section-hero></section-hero>
    <section-about></section-about>
    <section-skills></section-skills>
    <section-work></section-work>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import SectionHero from './components/sections/SectionHero.vue';
import SectionAbout from './components/sections/SectionAbout.vue';
import SectionSkills from './components/sections/SectionSkills.vue';
import SectionWork from './components/sections/SectionWork.vue';

export default {
  components: { TheHeader, TheFooter, SectionHero, SectionAbout, SectionSkills, SectionWork },
  name: 'App',
  mounted() {
    this.setUpNavHandler();
  },
  methods: {
    setUpNavHandler() {
      const links = document.querySelectorAll('.wrapper-head a, .btn');

      for (const link of links) {
        link.addEventListener('click', scrollHandler);
      }

      function scrollHandler(e) {
        for (const link of links) {
          link.classList.remove('is-active');
        }
        let hasHash = this.href.includes('#');
        if (hasHash) {
          e.preventDefault();
          const href = this.getAttribute('href');
          const anchor = document.querySelector(href);
          anchor.scrollIntoView();
          this.classList.add('is-active');
        }
      }
    },
  },
};
</script>
