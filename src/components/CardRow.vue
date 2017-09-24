<template>
  <div class="card-row">
    <card v-for="(day, index) in daysWithPos"
          :key="index"
          :date="day.date"
          :class="{touched: day.touched}"
          :style="{transform: `translateX(${day.pos.left}px)`, left: `${day.pos.x}px`}"
          v-on:touchstart.native="onTouchStart($event, day)"
          v-on:touchmove.native="onTouchMove($event, day)"
          v-on:touchend.native="onTouchEnd($event, day)"
          :tasks="tasks">
    </card>
  </div>
</template>

<script>
import Card from './Card'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/withLatestFrom'

export default {
  name: 'cardRow',
  props: ['days', 'tasks'],
  data () {
    return {
      daysWithPos: this.days.map((day, index) => ({
        date: day,
        touched: false,
        pos: {
          top: 0,
          x: index * window.innerWidth,
          left: 0
        }
      })),
      startPos: null,
      direction: 0
    }
  },
  methods: {
    onTouchStart (event, day) {
      day.touched = true;
      this.startPos = {
        left: event.touches[0].pageX,
        top: event.touches[0].pageY
      }
    },
    onTouchMove (event, day) {
      let left = event.touches[0].pageX
      let diff = left - this.startPos.left
      this.startPos.left = left
      this.direction = diff < 0 ? -1 : 1;

      this.daysWithPos
        .map((item) => {
          item.pos.left += Math.floor(diff)
        })

      if (Math.abs(this.startPos.top - event.touches[0].pageY) < 10) {
        event.preventDefault()
      }
    },
    onTouchEnd (event, day) {
      day.touched = false
      this.startPos = null
      let diff = day.pos.left / window.innerWidth;
      diff = this.direction < 0 ? Math.floor(diff) : Math.ceil(diff)
      diff *= window.innerWidth

      if (diff > 0) {
        diff = 0
      }
      let maxOffset = (-1) * (this.daysWithPos.length - 1) * window.innerWidth
      if (diff < maxOffset) {
        diff = maxOffset
      }
      this.daysWithPos
        .map((item) => {
          item.pos.left = Math.floor(diff)
        })
      event.preventDefault()
    }
  },
  components: {
    card: Card
  }
}

</script>

<style lang="scss">
.card-row {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  .card-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    flex-shrink: 0;
    transition: all 0.05s ease-out;
    padding: 80px 30px 30px;

    .card {
      border-radius: 7px;
      overflow: auto;
      box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.2);
      max-height: 100%;
    }

    &.touched {
      transition: none;
      transition: box-shadow 0.2s ease-out;

      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.15);
    }

    &.is-today {
      opacity: 1;
      pointer-events: all;
      border: solid 4px #1f538f;
      z-index: 10;
    }
  }
}
</style>
