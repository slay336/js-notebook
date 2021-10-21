import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";

Vue.config.productionTip = false

Vue.prototype.$http = axios;

let globalData = new Vue({
    data: {
        $notes: [
            {
                id: 1,
                title: "Title 1",
                description: "Description 1"
            },
            {
                id: 2,
                title: "Title 2",
                description: "Description 2"
            },
            {
                id: 3,
                title: "Title 3",
                description: "Description 3"
            },
            {
                id: 4,
                title: "Title 4",
                description: "Description 4"
            }
        ]
    }
})
Vue.mixin({
    computed: {
        $notes: {
            get() {
                return globalData.$data.$notes;
            },
            set(newNotesState) {
                globalData.$data.$notes = newNotesState;
            }
        }
    }
})

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')
