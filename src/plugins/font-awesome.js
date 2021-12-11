// @/plugins/font-awesome.ts
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, fas } from '@fortawesome/free-solid-svg-icons'
// import FontAwesomeIcon from '@/lib/FontAwesomeIcon.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, faUserSecret)

// https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821
// ver gotcha 3
dom.watch()

export {
  FontAwesomeIcon
}
