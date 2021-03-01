<template>
  <div class="list-body-wrapper">
    <div class="list-body">
      <c-btn
        icon
        class="list-body__create-btn--top"
        @click="createTask"
      >
        <plus-icon
          size="36"
          style="transform:rotate(-45deg)"
        />
      </c-btn>
      <template v-for="task in tasksList">
        <todo-task
          :key="task['.key']"
          :task="task"
          @delete="deleteTask(task['.key'])"
          @update="updateTask(task['.key'], $event)"
        />
      </template>
      <template v-if="tasksList.length === 0">
        <h3 class="list-body__title">The to-do list is empty.</h3>
      </template>
      <br>
      <br>
      <c-btn
        title="Create new task"
        class="list-body__create-btn"
        @click="createTask"
      >
        <template v-slot:prependIcon>
          <plus-icon />
        </template>
      </c-btn>
    </div>
  </div>
</template>

<script>
import CBtn from '@/components/ui/CBtn'
import PlusIcon from '@/components/svg/PlusIcon'
import TodoTask from '@/components/TodoTask'

export default {
  name: 'ListBody',
  components: {
    'c-btn': CBtn,
    'plus-icon': PlusIcon,
    'todo-task': TodoTask
  },
  props: {
    tasksList: Array
  },
  mounted () {
    console.log('tasksList', this.tasksList)
  },
  methods: {
    deleteTask (e) {
      this.$emit('delete-task', e)
    },
    updateTask (i, data) {
      this.$emit('update-task', i, data)
    },
    createTask () {
      const data = {
        checked: false,
        date: Date.now(),
        description: ''
      }
      this.$emit('create-task', data)
    }
  }
}
</script>

<style lang="scss" scoped>
 .list-body-wrapper {
   background-color: #889DEA;
 }
 .list-body {
   position: relative;
   background-color: #fff;
   border-top-left-radius: 41px;
   padding: 92px 7.5% 40px 7.5%;

   &__create-btn {
     width: 208px;
     margin: 0 auto;

     &--top {
       position: absolute;
       left: 50%;
       top: -25px;
       transform: translate(-50%) rotate(45deg);
       width: 48px;
       height: 48px;
       margin: 0 auto;
     }
   }

   &__title {
     text-align: center;
   }
 }
</style>
