<template>
  <div id="skills" class="wrapper-section wrapper-section--lilac wrapper-section--wave-top  wrapper-section--wave-base">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="medium-8 cell">
          <h3 class="section-title">Skills</h3>
          <p>
            I love to keep learning. I've worked with classic ASP, C#, JavaScript, and currently love SCSS, Vue.js, and
            React. I'm also deeply interested in improving accessibility for all users - it's a primary focus for me.
            The user comes first!
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
export default {
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          icon: 'sh-icon-html5',
        },
        {
          name: 'CSS / SCSS',
          icon: 'sh-icon-sass',
        },
        {
          name: 'JavaScript',
          icon: 'sh-icon-javascript',
        },
        {
          name: 'Vue.js',
          icon: 'sh-icon-vue',
        },
        {
          name: 'Accessibility',
          icon: 'sh-icon-accessibility',
        },
        {
          name: '3rd Party Integrations',
          icon: 'sh-icon-api',
        },
        {
          name: 'Performance',
          icon: 'sh-icon-meter',
        },
        {
          name: 'Git / Subversion',
          icon: 'sh-icon-github',
        },
        {
          name: 'Jira / Trello',
          icon: 'sh-icon-jira',
        },
        {
          name: 'Cypress',
          icon: 'sh-icon-lab',
        },
        {
          name: 'MS-SQL / T-SQL',
          icon: 'sh-icon-database',
        },
        {
          name: 'C# / Kentico',
          icon: 'sh-icon-kentico',
        },
        {
          name: 'Team Scheduling',
          icon: 'sh-icon-team',
        },
        {
          name: 'Team Mentoring',
          icon: 'sh-icon-team',
        },
        {
          name: 'Time Estimation & Quoting',
          icon: 'sh-icon-timelapse',
        },
        {
          name: 'Requirements Gathering',
          icon: 'sh-icon-doc',
        },
        {
          name: 'Client Liaising',
          icon: 'sh-icon-handshake-o',
        },
        {
          name: 'Presentations',
          icon: 'sh-icon-microphone',
        },
      ],
    };
  },
};
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
