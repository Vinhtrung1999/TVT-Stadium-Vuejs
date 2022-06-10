import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.config.globalProperties.$filters = {
    filterMoney(value) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(value)
    }
}

app.mount('#app')
