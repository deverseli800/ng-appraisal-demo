import Vue, { router } from './main'
import App from './App.vue'

new Vue({
    router,
    render: h => h(App),
    data: {
        reportFontSize: 2
    },
}).$mount('#app')