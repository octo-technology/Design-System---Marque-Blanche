<template>
  <div :class="classes">
      <span class="icon"></span>
      <span class="text-content">{{ text }}</span>
      <span class="close-button"></span>
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import "@/tokens/colors.css";
import "@/stories/alert.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

type AlertProps = {
  /**
   * Text of the alert
   */
  text: string,

  /**
   * Link of the alert
   */
  link?: string,

  /**
   * Alert type
   */
  type?: 'alert' | 'success' | 'info' | 'warning',

  /**
   * Alert variant
   */
  variant?: 'toast' | 'banner',
}

const props = withDefaults(defineProps<AlertProps>(), {
  type:'alert',
  variant:'banner',
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-alert': true,
  [`storybook-alert--${props.variant}-${props.type}`]: true
}));

</script>

