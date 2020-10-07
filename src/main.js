import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
import Quiz from './components/Quiz.vue'
import Home from './components/Home.vue'
import Results from './components/Results.vue'


import App from './App.vue'




Vue.use(VueRouter)


const router=new VueRouter({
    routes: [
        {

            path: '/home',
            alias: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/quiz/:team',
            name: 'quiz',
            component: Quiz,
            props: true 
            
        },
        {
            path: '/results',
            name: 'results',
            component: Results,
            
        }
    ]
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})