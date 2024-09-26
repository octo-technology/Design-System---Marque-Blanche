<template>
  <button type="button" :class="classes" @click="onClick" :disabled="disabled">
      {{ label.text }}
      <i v-if="label.icon" :class="label.icon.name"></i>
  </button>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import "@/tokens/colors.css";
import "@/stories/button.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

type Icon = {
  name: string,
  position: 'left' | 'right',
}

type ButtonProps = {
  /**
   * The label of the button
   */
  label: {
    text: string,
    icon?: Icon
  },
  /**
   * Button type
   */
  type?: 'primary' | 'destructive',

  /**
   * Button variant
   */
  variant?: 'contained' | 'outlined' | 'subtle',

  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',

  /**
   * Button disabled state
   */
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type:'primary',
  variant:'contained',
  size:'medium',
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  [`storybook-button--${props.type || 'primary'}-${props.variant || 'contained'}`]: true,
  [`storybook-button--${props.size || 'medium'}`]: true,
  [`storybook-button-icon--${props.label.icon?.position}`]: props.label.icon,

}));

const onClick = () => {
  emit("click", 1)
};

</script>

