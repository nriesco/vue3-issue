import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@/plugins/font-awesome'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app
  .use(store)
  .use(router)
  .mount('#app')
