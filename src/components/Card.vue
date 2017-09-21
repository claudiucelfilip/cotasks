<template>
  <b-card :title="title"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <h5 class="margin-bottom--15">{{subtitle}}</h5>

    <b-button v-for="task in tasks"
              :key="task.id"
              class="task"
              href="#"
              variant="primary">{{task.name}}</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'card',
  props: ['date', 'tasks'],
  data () {
    return {
      title: this.date.format('dddd'),
      subtitle: this.date.format('Do MMMM')
    }
  }
}

</script>

<style lang="scss">
.task {
  display: block;
  margin-bottom: 15px;
}
</style>