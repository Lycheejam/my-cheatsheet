<template lang="md">
  <div v-html="$md.render(model)" />
</template>

<script>
import axios from 'axios'
import model from './assets/testdoc/test1.md'

export default {
  layout: 'default',
  data() {
    return {
      model: model
    }
  }
}
</script>
