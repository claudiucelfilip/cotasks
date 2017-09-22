<template>
  <b-card :title="title"
          :img-src="`https://lorempixel.com/600/300/nature/${Math.floor(Math.random() * 9) + 1}`"
          img-alt="Image"
          img-top
          tag="article"
          :class="{'is-today': isToday}">
    <h5 class="margin-bottom--30">{{subtitle}}</h5>

    <b-button v-for="task in todaysTasks"
              :key="task.value._id"
              class="task"
              :class="{'done': task.value.done}"
              @click="setDone(task)"
              :style="{background: task.value.color}">
              <span class="icon icon-check-circle float-left"></span>
              {{task.value.name}}
    </b-button>
  </b-card>
</template>

<script>
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/from'
import moment from 'moment'

export default {
  name: 'card',
  props: ['date', 'tasks'],
  data () {
    return {
      title: this.date.format('dddd'),
      subtitle: this.date.format('Do MMMM'),
      isToday: this.date.isSame(new Date(), 'day')
    }
  },
  computed: {
    todaysTasks: function () {
      return this.tasks.value.filter((task) => {
        return this.date.isSame(new Date(task.value.dueDate), 'day')
      })
    }
  },
  methods: {
    setDone: function (task) {
      task.next(Object.assign({}, task.value, {
        done: !task.value.done
      }))
    }
  }

}

</script>

<style lang="scss">
.task {
  width: 100%;
  margin-bottom: 10px;
  border: none;

  .icon {
    opacity: 0;
  }

  &.done {
    opacity: 0.5;
    .icon {
      opacity: 1;
    }
  }
}
</style>