<template>
  <div id="app"
       class="container-fluid text-center">
    <router-view></router-view>
  </div>
</template>

<script>
import { observable } from 'mobx'
// import Notifications from '@/services/Notifications'

export default {
  name: 'app',
  data () {
    // let notifications = new Notifications();

    // setTimeout(() => {
    //   notifications.createNotification('Hey there', {
    //     body: 'This is a notifiaction yo!'
    //   })
    // }, 1000)
    let appState = observable({
      tasks: []
    })
    return {
      appState
    }
  }
}
</script>

<style lang="scss">
html, body {
  background: none;
  height: 100%;
  background: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  background: #fff;
  overflow: hidden;

}

.container-fluid {
  max-width: 768px;
}
.nav {
  background: rgba(255,255,255,0.8);
  margin-bottom: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 5px 0;
}
</style>
