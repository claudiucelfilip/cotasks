import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/containers/Main'
import AddTask from '@/containers/AddTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/add-task',
      name: 'AddTask',
      component: AddTask
    }
  ]
})
