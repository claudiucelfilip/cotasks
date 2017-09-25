import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/skip'
import * as axios from 'axios'

const API_URL = process.env.API_URL + '/backdrops'
class Backdrops {
  getImageSrc (day) {
    return `${API_URL}/${day}`;
  }
}

export default new Backdrops()
