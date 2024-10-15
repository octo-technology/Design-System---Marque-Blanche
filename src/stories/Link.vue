<template>
  <a
    :href='url'
    :target='target'
    :class="classes"
    v-bind:title="target==='_blank' ? 'ouvrir dans un nouvel onglet': ''"
  >{{ text }}</a>
</template>

<script
  setup
  lang="ts"
>

import './link.css'
import { computed } from 'vue'

interface Link {
  text: string,
  url: string,
  target: '_self' | '_blank'
}

const props = withDefaults(defineProps<Link>(), {
  text: 'Lien',
  url: '#',
  target: '_self'
})

const classes = computed(() => ({
  'storybook-link': true,
  'storybook-link--external': props.target === '_blank'
}))

</script>
