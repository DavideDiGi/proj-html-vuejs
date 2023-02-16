/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter as faTwitterBrands } from '@fortawesome/free-brands-svg-icons'

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitterBrands, faStarSolid,)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
