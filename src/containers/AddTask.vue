<template>
  <div class="text-left add-task">
    <b-nav>
      <b-nav-item>
        <router-link :to="{name: 'Main'}">
          <b-button :variant="'outline-primary'">
            <span class="icon-chevron-left"></span> Back
          </b-button>
        </router-link>
      </b-nav-item>
    </b-nav>

    
    <b-form @submit="onSubmit">
      <b-container>
        <h1>Add Task</h1>
        <b-form-group id="nameGroup"
                      label="Name:"
                      label-for="name"
                      description="Add a suggestive name for the task.">
          <b-form-input id="name"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Water Drosoftea"></b-form-input>
        </b-form-group>
        <b-form-group id="descriptionGroup"
                      label="Description:"
                      label-for="description"
                      description="Add a useful description for the task.">
          <b-form-input id="description"
                        type="text"
                        v-model="form.description"
                        placeholder="Use only a small amount of water"></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group id="startDateGroup"
                          label="Start Date:"
                          label-for="startDate"
                          description="Add start date for the task.">
              <b-form-input id="startDate"
                            type="date"
                            v-model="form.startDate"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="colorGroup"
                          label="Color:"
                          description="Add a color for the task.">
              <b-button v-for="(color, index) in colors"
                        :key="index"
                        class="color"
                        :class="{active: color === form.color}"
                        :style="{background: color}"
                        @click="setColor(color)"></b-button>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="frequencyGroup"
                          label="Frequency:"
                          label-for="frequency"
                          description="Set the frequency of the task.">
              <b-form-select id="frequency"
                             :options="frequencies"
                             required
                             placeholder="Every 2 days"
                             v-model="form.frequency"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="durationGroup"
                          label="Duration:"
                          label-for="duration"
                          description="Set how long for the task will repeat.">
              <b-form-select id="duration"
                             :options="durations"
                             required
                             placeholder="Month"
                             v-model="form.duration"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button type="submit"
                  class="margin-right--10"
                  variant="primary">Submit</b-button>
        <b-button type="reset"
                  variant="outline-danger">Reset</b-button>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import Tasks from '@/services/Tasks'
import moment from 'moment'

export default {
  name: 'AddTask',
  data () {
    let colors = [
      '#ff6159',
      '#86c53e',
      '#16a6f8',
      '#72c2a1',
      '#f4b401',
      '#5e6fd1'
    ]
    return {
      colors,
      form: {
        name: '',
        description: '',
        frequency: 1,
        duration: 31,
        startDate: new Date(),
        color: colors[0]
      },
      frequencies: [
        { text: 'Daily', value: 1 },
        { text: 'Every 2 days', value: 2 },
        { text: 'Every 3 days', value: 3 },
        { text: 'Every 4 days', value: 4 },
        { text: 'Weekly', value: 7 },
        { text: 'Every 2 weeks', value: 14 },
        { text: 'Every 3 weeks', value: 21 },
        { text: 'Monthly', value: 30 }
      ],
      durations: [
        { text: 'Week', value: 7 },
        { text: '2 weeks', value: 14 },
        { text: '3 weeks', value: 21 },
        { text: 'Month', value: 31 },
        { text: '2 months', value: 62 },
        { text: '3 months', value: 93 },
        { text: 'Year', value: 356 },
        { text: '2 years', value: 712 }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      Tasks.add(this.form).then(() => {
        this.$router.push({ name: 'Main' })
      })
      evt.preventDefault()
    },
    setColor (color) {
      this.form.color = color
    }
  }
}

</script>
<style lang="scss" scoped>
.color {
  width: 30px;
  height: 30px;
  margin: 5px 10px 5px 0;
  border: none;
  opacity: 0.8;

  &.active {
    box-shadow: inset 0 1px 12px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #fff;
    opacity: 1;
  }
}

.add-task {
  background: #fff;
}
</style>