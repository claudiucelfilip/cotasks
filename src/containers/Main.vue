<template>
  <div class="main">
    <b-nav>
      <h1 class="margin-left--30">cotasks</h1>
      <b-nav-item>
        <!-- <router-link :to="{name: 'AddTask'}"> -->
        <b-button :variant="'outline-primary'"
                  :to="{name: 'AddTask'}">
          <span class="icon-plus-circle"></span> Add Task
        </b-button>
        <!-- </router-link> -->
      </b-nav-item>
    </b-nav>
    <card-row :tasks="tasks" :days="days"></card-row>
  </div>
</template>

<script>
import Tasks from '@/services/Tasks'
import CardRow from '@/components/CardRow'
import 'rxjs/add/operator/map'
import moment from 'moment'

export default {
  name: 'main',
  data () {
    let days = [
      // moment().add(-1, 'days'),
      moment(),
      moment().add(1, 'days'),
      moment().add(2, 'days'),
      moment().add(3, 'days'),
      moment().add(4, 'days'),
      moment().add(5, 'days'),
      moment().add(6, 'days'),
      moment().add(7, 'days')
    ]
    return {
      today: moment(),
      days,
      tasks: Tasks.getAll()
    }
  },
  components: {
    'card-row': CardRow
  }
}
</script>

<style lang="scss" scoped>
.nav {
  justify-content: space-between;
  z-index: 2;
  position: relative;
}

</style>
