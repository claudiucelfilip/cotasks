<template>
  <div class="main">
    <b-nav v-popin>
      <b-nav-item class="logo">
        <h3 class=" margin-left--15">cotasks</h3>
      </b-nav-item>
      <b-nav-item class="user-area"
                  @click="login($event)">
        <b-button :variant="'primary'"
                  class="btn-round btn-user">
          <span class="icon-user" v-if="!avatar"></span>
          <img :src="avatar" v-if="avatar"/>
        </b-button>
        <span class="username">{{username}}</span>
      </b-nav-item>
      <b-nav-item class="action-area">
        <b-button :variant="'outline-primary'"
                  @click="goto('AddTask')">
          <span class="icon-plus-circle"></span> Add Task
        </b-button>
      </b-nav-item>
    </b-nav>
    <card-row :tasks="tasks"
              :days="days"></card-row>
  </div>
</template>

<script>
import Tasks from '@/services/Tasks'
import User from '@/services/User'
import CardRow from '@/components/CardRow'
import 'rxjs/add/operator/map'
import moment from 'moment'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/observable/timer'

export default {
  name: 'main',
  data () {
    let days = [
      // moment().add(-1, 'days'),
      moment(),
      moment().add(1, 'days'),
      moment().add(2, 'days'),
      moment().add(3, 'days'),
      moment().add(4, 'days'),
      moment().add(5, 'days'),
      moment().add(6, 'days'),
      moment().add(7, 'days')
    ]
    let user = User.getUser();

    return {
      today: moment(),
      days,
      tasks: Tasks.getAll(),
      user
    }
  },
  components: {
    'card-row': CardRow
  },
  computed: {
    username () {
      return (this.user.value && this.user.value.name) || 'Guest';
    },
    avatar () {
      return (this.user.value && this.user.value.avatar) || null;
    }
  },
  methods: {
    goto (name) {
      this.$router.push({ name });
    },
    login (event) {
      User.login()
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  justify-content: space-between;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
}

.user-area {
  white-space: nowrap;
  .nav-link {
    color: #2c3e50;
  }
}

.logo {
  margin-right: 0;
  color: #2c3e50;
  .nav-link {
    color: inherit;
    padding: 0;
  }
}

.username {
  max-width: 120px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.btn-user {
  display: inline-block;
  font-size: 20px;
  background-color: #2c3e50;
  border: none;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
}

.action-area {
  .nav-link {
    padding-left: 0
  }
}
</style>
