<template>
  <button type="button" :class="classes" @click="onClick" >{{ label }} </button>
</template>

<script lang="ts"setup>

import { computed } from 'vue';
import "@/tokens/colors.css";
import "@/stories/button.css"


type ButtonProps = {
  /**
   * The label of the button
   */
  label: string,
  /**
   * type of the button
   */
  type ?: 'primary'| 'secondary' | 'destructive',

  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',

}

const props = withDefaults(defineProps<ButtonProps>(), {
  type:'primary',
  size:'medium',
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  [`storybook-button--${props.type || 'primary'}`]: true,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const onClick = () => {
  emit("click", 1)
};

</script>

