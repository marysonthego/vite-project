import { createApp } from 'vue';
import App from './App.vue';
import './assets/reset.css';
import { createPinia } from 'pinia';

const app = createApp(App).mount('#app')

app.use(createPinia())

