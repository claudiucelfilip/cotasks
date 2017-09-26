import Facebook from '@/services/Facebook'

class User {
  getUser () {
    return Facebook.getUser()
  }
  login () {
    Facebook.login()
  }
}

export default new User()
