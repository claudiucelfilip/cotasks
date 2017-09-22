import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/skip'
import * as axios from 'axios'

const API_URL = process.env.API_URL + '/tasks'
class Tasks {
  constructor () {
    this._tasks = new BehaviorSubject([])
  }
  getAll () {
    this.fetch()
    return this._tasks
  }

  get (taskId) {
    return this._tasks.value.search(task => task._id === taskId)
  }

  fetch () {
    axios.get(`${API_URL}`).then((tasks) => {
      this._tasks.next(tasks.data.map(task => this.makeTask(task)))
    })
  }

  makeTask (task) {
    let newTask = new BehaviorSubject(task)
    newTask.skip(1).subscribe(this.update)
    return newTask
  }

  removeTask (task) {
    task.dispose()
  }

  add (task) {
    this._tasks.next([...this._tasks.value, this.makeTask(task)])
    return axios.post(`${API_URL}`, task)
  }

  delete (taskId) {
    this._tasks.next([...this._tasks.value.filter(task => {
      if (task._id === taskId) {
        this.removeTask(task)
        return false
      }
      return true
    })])

    return axios.delete(`${API_URL}/${taskId}`)
  }

  update (task) {
    let taskId = task._id
    return axios.put(`${API_URL}/${taskId}`, task)
  }
}

export default new Tasks()
