import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')
