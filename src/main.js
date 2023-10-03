import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faMagnifyingGlass,
    faListUl,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

import {
    faEnvelope,
    faClock
} from '@fortawesome/free-regular-svg-icons'

import {
    faLinkedinIn,
    faFacebookF,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faMagnifyingGlass,
    faListUl,
    faLinkedinIn,
    faFacebookF,
    faTwitter, faLocationDot,
    faPhone,
    faEnvelope,
    faClock)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
