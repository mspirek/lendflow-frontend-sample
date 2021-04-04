import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'

const app = Vue.createApp(App)

app.use(VueAxios, axios)

app.mount('#app')
