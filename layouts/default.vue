<template>
  <v-app>
    <HeaderItem />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderItem from '~/components/HeaderItem.vue'

export default {
  components: {
    HeaderItem
  },
  data() {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
