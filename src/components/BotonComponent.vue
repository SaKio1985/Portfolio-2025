<script setup>
import { computed } from "vue";

const props = defineProps({
  text: String,

  iconName: String,

  iconObject: Object,
  href: String,
  target: String,
});

const isLink = computed(() => !!props.href);
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : null"
    :target="isLink ? target : null"
    :rel="isLink && target === '_blank' ? 'noopener noreferrer' : null"
    class="custom-button"
  >
    <font-awesome-icon v-if="iconName" :icon="iconName" class="icon-spacing" />
    <font-awesome-icon
      v-if="iconObject"
      :icon="iconObject"
      class="icon-spacing"
    />
    <span v-if="text">{{ text }}</span>
  </component>
</template>

<style scoped>
.custom-button {
  padding: 8px 15px;
  border: 1px solid #ccc;
  background-color: #eee;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.custom-button:hover {
  background-color: #c49f3b;
}
.icon-spacing {
  margin-right: 5px;
}
.custom-button span:empty + .icon-spacing {
  margin-right: 0;
}

.custom-button .icon-spacing:last-child {
  margin-right: 0;
}
</style>
