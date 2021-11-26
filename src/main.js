import { createApp } from 'vue'
import App from './App.vue'
import StoryblokVue from 'storyblok-vue'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import {Vue} from 'vue'

Vue.use(StoryblokVue)
Vue.component('page', Page)
Vue.component('teaser', Teaser)


createApp(App).mount('#app')
