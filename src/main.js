import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";

Vue.config.productionTip = false

Vue.prototype.$http = axios;

let globalData = new Vue({
    data: {
        $notes: []
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
    },
    methods: {
        callDialog(dialog, noteId) {
            dialog.open(noteId);
        }
    }
})

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')
