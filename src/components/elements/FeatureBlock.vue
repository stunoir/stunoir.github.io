<template>
  <div class="feature-block">
    <h4 class="section-subtitle">
      <span>{{ title }}</span> <span :class="getIcon"></span>
    </h4>
    <hr />
    <div v-if="collection && collection.length > 0" class="grid-x grid-margin-x medium-up-3 feature-small">
      <div v-for="item in collection" :key="item.name" class="cell">
        <p>
          <strong>{{ item.name }}</strong
          >{{ item.details }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'collection'],
  computed: {
    getIcon() {
      return 'sh-icon-' + this.icon;
    },
  },
};
</script>
