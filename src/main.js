import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faListUl } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faListUl)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
