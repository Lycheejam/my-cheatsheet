<template>
  <div>
    <div v-html="$md.render(model)" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'default',
  data() {
    return {
      model: null
    }
  },
  mounted: function() {
    axios
      .get('http://localhost:3000/testdoc/test1.md')
      .then(function(response) {
        this.model = response.data
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
  }
}
</script>
