import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

let notes = [
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
];

new Vue({
  router,
  vuetify,
  render: h => h(App),
  data: {
    notes
  }
}).$mount('#app')
