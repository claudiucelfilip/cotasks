<template>
  <div id="app"
       class="container text-center">
    <router-view></router-view>
  </div>
</template>

<script>
import { observable } from 'mobx'

export default {
  name: 'app',
  data () {
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  background: #efefef;
  margin-bottom: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 5px 0;
}
</style>
