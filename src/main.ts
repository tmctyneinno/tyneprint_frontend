// @ts-nocheck

// https://getbootstrap.com/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// https://icons.getbootstrap.com/
import 'bootstrap-icons/font/bootstrap-icons.css'

//https://vue3datepicker.com/installation/
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// https://vue-select.org/
//vue-select@beta
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// https://hc200ok.github.io/vue3-easy-data-table-doc/getting-started.html
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// https://github.com/marcoschulte/vue3-progress
// import '@marcoschulte/vue3-progress/dist/index.css';
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';

// https://vueup.github.io/vue-quill/
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// https://www.npmjs.com/package/vue3-loading-skeleton
import { SkeletonLoader } from "vue3-loading-skeleton";
import "vue3-loading-skeleton/dist/style.css";

// ################################
// https://www.npmjs.com/package/vue3-dropzone
// https://www.npmjs.com/package/axios
// #################################

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.component('vSelect', vSelect);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('QuillEditor', QuillEditor)
app.component("SkeletonLoader", SkeletonLoader)

app.use(createPinia())
// app.use(Vue3ProgressPlugin);
app.use(router)

app.mount('#app')
