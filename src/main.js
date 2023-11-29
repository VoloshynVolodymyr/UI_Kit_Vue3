import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass, faHandPointUp, faCircleCheck, faCircleStop, faCircleXmark, faCircleUp, faCircleDown } from '@fortawesome/free-regular-svg-icons'
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass, faHandPointUp, faCircleCheck, faCircleStop, faCircleXmark, faCircleUp, faCircleDown])

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
