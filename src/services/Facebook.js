import { BehaviorSubject } from 'rxjs/BehaviorSubject'
const APP_ID = process.env.FACEBOOK_APP_ID;

class Facebook {
  constructor () {
    this.user = new BehaviorSubject(null)
    window.fbSaveUser = () => {
      this.getLoginStatus()
        .catch(this._login)
        .then(this.getUserInfo)
        .then((user) => {
          this.user.next(user)
        })
        .catch(() => {
          alert('You must be logged in')
        })
    }

    this.addScriptTag()
  }
  getLoginStatus () {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          return resolve(response)
        }
        reject(response)
      })
    })
  }
  getUserInfo (response) {
    let info = new Promise((resolve) => {
      window.FB.api('/me', { fields: 'id,first_name' }, resolve)
    })
    let picture = new Promise((resolve) => {
      window.FB.api('/me/picture', resolve)
    })

    return Promise.all([info, picture]).then(([info, picture]) => {
      return {
        id: info.id,
        name: info.first_name,
        avatar: picture.data.url
      }
    })
  }
  addScriptTag () {
    let script = document.createElement('script')
    script.innerHTML = `
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '${APP_ID}',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
      fbSaveUser();
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
    `
    document.body.appendChild(script)
  }
  getUser () {
    return this.user
  }
  _login () {
    return new Promise((resolve, reject) => {
      window.FB.login(response => {
        if (response.authResponse) {
          return resolve(response)
        }
        reject(response)
      })
    })
  }

  login () {
    window.fbSaveUser()
  }
}

export default new Facebook()
