<template>
  <div class="text-left">
    <b-nav>
      <b-nav-item>
        <router-link :to="{name: 'Main'}">
          <b-button :variant="'outline-primary'">
            <span class="icon-chevron-left"></span> Back
          </b-button>
        </router-link>
      </b-nav-item>
    </b-nav>

    <h1>Add Task</h1>
    <b-form @submit="onSubmit">
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
      <b-button type="submit"
                class="margin-right--10"
                variant="primary">Submit</b-button>
      <b-button type="reset"
                variant="outline-danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// import Task from '@/models/Task'
// import { connect } from 'vue-mobx'

export default {
  name: 'AddTask',
  data () {
    return {
      form: {
        name: '',
        description: '',
        frequency: null
      },
      frequencies: [
        { text: 'Select One', value: null },
        { text: 'Daily', value: 1 },
        { text: 'Every 2 days', value: 2 },
        { text: 'Every 3 days', value: 3 },
        { text: 'Every 4 days', value: 4 },
        { text: 'Weekly', value: 7 },
        { text: 'Every 2 weeks', value: 14 },
        { text: 'Every 3 weeks', value: 21 },
        { text: 'Monthly', value: 30 }

      ]
    }
  },
  methods: {
    onSubmit (evt) {
      // let task = new Task(this.form)
      // task.save()
    }
  }
}

</script>