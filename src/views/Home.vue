<template>
  <div class="home">
    <list-head
      :total-tasks="totalTasks"
      :active-tasks="activeTasks"
      :successful-tasks="successfulTasks"
    />
    <list-body
      :tasksList="tasksList"
      @delete-task="deleteTask"
      @update-task="updateTask"
      @create-task="createTask"
    />
  </div>
</template>

<script>
import ListHead from '@/components/ListHead'
import ListBody from '@/components/ListBody'
import { db } from '@/db'

export default {
  name: 'Home',
  components: {
    'list-head': ListHead,
    'list-body': ListBody
  },
  data: () => ({
    tasksList: []
  }),
  firebase: {
    tasksList: db.ref('task')
  },
  computed: {
    totalTasks () {
      return this.tasksList.length
    },
    activeTasks () {
      return this.tasksList.filter(el => !el.checked).length
    },
    successfulTasks () {
      return this.tasksList.filter(el => el.checked).length
    }
  },
  methods: {
    deleteTask (i) {
      db.ref('task/' + i)
        .remove()
        .then(() => console.log('deleted!'))
    },
    updateTask (i, data) {
      db.ref('task/' + i)
        .set(data)
        .then(() => console.log('updated!'))
    },
    createTask (data) {
      db.ref('task')
        .push(data)
        .then(() => console.log('created!'))
    }
  }
}
</script>
