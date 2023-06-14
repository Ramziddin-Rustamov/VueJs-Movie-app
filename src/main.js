import { createApp } from 'vue'
import App from '@/component/app/App.vue'
import uiComponents from "./ui-components"

const app = createApp(App)
// defining global components here !
uiComponents.map(component=>{app.component(component.name,component)})

app.mount('#app')
