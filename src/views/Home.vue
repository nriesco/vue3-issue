<template>
  <div class="home">
    <input v-model="email">
    <button @click.prevent="mySubmitFunction">submit</button>
    <i v-if="loading" class="fas fa-circle-notch fa-spin">my loading icon ...</i>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      email: 'make it fail!'
    }
  },
  methods: {
    async mySubmitFunction () {
      const self = this
      self.loading = true
      try {
        const loginResult = await axios.post('https://testingvue3.free.beeceptor.com', { some: 'data' })
        if (loginResult && loginResult.data && loginResult.data.accessToken) {
          // do something
          self.loading = false
        } else {
          self.loading = false
        }
      } catch (e) {}
      // self.loading = false
    }
  }
}
</script>
