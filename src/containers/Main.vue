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
    <div class="card-wrapper">
      <card v-for="(day, index) in days"
            :key="index"
            :date="day"
            :tasks="tasks"></card>
    </div>
  </div>
</template>

<script>
import Tasks from '@/services/Tasks'
import Card from '@/components/Card'
import 'rxjs/add/operator/map'
import moment from 'moment'

export default {
  name: 'main',
  data () {
    let days = [
      moment().add(-1, 'days'),
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
    'card': Card
  }
}
</script>

<style lang="scss" scoped>
.nav {
  justify-content: space-between;
}
.card-wrapper {
  overflow: auto;
  width: 100%;
  display: flex;
}
.card {
  margin: 10px;
  max-width: 250px;
  width: 100%;
  flex-shrink: 0;
  opacity: 0.3;
  pointer-events: none;

  &:first-child {
    margin-left: -150px;
  }

  &.is-today {
    opacity: 1;
    pointer-events: all;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
  }
}
</style>
