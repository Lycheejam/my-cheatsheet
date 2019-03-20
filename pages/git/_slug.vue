<template>
  <div>
    <div v-html="$md.render(model)" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      model: '#Hello World'
    }
  }
}
</script>
