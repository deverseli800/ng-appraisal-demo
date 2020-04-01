

import './set-public-path';
import Vue, { router } from './main'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import singleSpaVue from "single-spa-vue";


const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render: h => h(App),
        router
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;