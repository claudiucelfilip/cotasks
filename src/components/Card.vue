<template>
  <div class="card-wrapper"
       :class="{'is-today': isToday}">
    <div class="blurred-image"
         :style="{backgroundImage: `url(${imageSrc})`}"></div>
    <b-card :title="title"
            :img-src="imageSrc"
            img-alt="Image"
            img-top>
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
  </div>
</template>

<script>
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/from'
import moment from 'moment'
import Backdrops from '@/services/Backdrops'

export default {
  name: 'card',
  props: ['date', 'tasks'],
  data () {
    return {
      title: this.date.format('dddd'),
      subtitle: this.date.format('Do MMMM'),
      isToday: this.date.isSame(new Date(), 'day'),
      imageSrc: Backdrops.getImageSrc(this.date.format('D'))
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
.blurred-image {
  position: absolute;
  top: 0;
  left: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 110%;
  min-height: 110%;
  transform: translateX(-50%);
  filter: blur(15px);
  opacity: 0.4;
}

.card-wrapper {
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: #000;
    box-shadow: 0 10px 100px 50px rgba(0,0,0,0.9);
    z-index: 10;
  }
  &.is-today {
    &:after {
      display: none;
    }
    .blurred-image {
      opacity: 0.8;
    }
    .card {
      opacity: 0.8;
    }
  }
}


.card {
  opacity: 0.4;
  position: relative;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}

.task {
  width: 100%;
  margin-bottom: 10px;
  border: none;

  .icon {
    display: none
  }

  &.done {
    opacity: 0.5;
    .icon {
      display: inline-block
    }
  }
}
</style>
