
export default class Notifications {
  constructor () {
    if (Notification.permission !== 'denied' && Notification.permission !== 'granted') {
      this.requestPermission()
    }
  }

  createNotification (message) {
    this.notification = new Notification(message)
  }

  requestPermission () {
    return Notification.requestPermission()
  }

  addNotification () {

  }
}
