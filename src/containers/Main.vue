<template>
  <div class="main">
    <b-nav>
      <b-nav-item>
        <!-- <router-link :to="{name: 'AddTask'}"> -->
          <b-button :variant="'outline-primary'"  :to="{name: 'AddTask'}">
            <span class="icon-plus-circle"></span> Add Task
          </b-button>
        <!-- </router-link> -->
      </b-nav-item>
    </b-nav>
    <div class="card-wrapper">
      <card :date="today" :tasks="tasks"></card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import moment from 'moment'

export default {
  name: 'main',
  data () {
    return {
      today: moment(),
      tasks: [
        {
          id: 1,
          name: 'Task1'
        },
        {
          id: 2,
          name: 'Task2'
        }
      ]
    }
  },
  components: {
    'card': Card
  }
}
</script>

<style lang="scss" scoped>
.nav {
  justify-content: flex-end;
}
.card {
  margin: 10px auto;
}
</style>
