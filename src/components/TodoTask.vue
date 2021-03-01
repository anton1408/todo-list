<template>
  <div class="todo-task">
    <div class="todo-task__actions">
      <c-checkbox
        :checked="task.checked"
        class="todo-task__checkbox"
        @click="checkboxHandler"
      />
      <c-datepicker
        :date="task.date"
        :disabled="isDisabled"
        class="todo-task__datepicker"
        @input="dateHandler"
      />
      <c-edit-btn
        class="todo-task__edit-btn"
        @click="editHandler"
      />
      <c-delete-btn
        class="todo-task__delete-btn"
        @delete="$emit('delete')"
      />
    </div>
    <div class="todo-task__task-body">
      <c-text-field
        :description="task.description"
        :disabled="isDisabled"
        :checked="isChecked"
        @input="description = $event"
      />
    </div>
  </div>
</template>

<script>
import CCheckbox from '@/components/ui/CCheckbox'
import CDatepicker from '@/components/ui/CDatepicker'
import CEditBtn from '@/components/ui/CEditBtn'
import CDeleteBtn from '@/components/ui/CDeleteBtn'
import CTextField from '@/components/ui/CTextField'

export default {
  name: 'TodoTask',
  components: {
    'c-checkbox': CCheckbox,
    'c-datepicker': CDatepicker,
    'c-edit-btn': CEditBtn,
    'c-delete-btn': CDeleteBtn,
    'c-text-field': CTextField
  },
  props: {
    task: Object
  },
  data: () => ({
    isDisabled: true,
    isChecked: false,
    date: null,
    description: null
  }),
  mounted () {
    this.description = this.task.description
    this.isChecked = this.task.checked
    this.date = this.task.date
  },
  methods: {
    checkboxHandler (e) {
      this.isChecked = e
      this.updateTask()
    },
    dateHandler (e) {
      this.date = e
    },
    editHandler (e) {
      this.isDisabled = e
      if (e) {
        this.updateTask()
      }
    },
    updateTask () {
      const data = {
        checked: this.isChecked,
        date: this.date,
        description: this.description
      }
      this.$emit('update', data)
    }
  }
}
</script>

<style lang="scss" scoped>
 .todo-task {
   margin-bottom: 20px;

   &__actions {
     display: flex;
     align-items: center;
   }
   &__checkbox {
     align-self: flex-end;
     margin-right: 8px;
   }
   &__datepicker {}
   &__edit-btn {
     margin: 0 12px 0 auto;
   }
   &__delete-btn {}
 }
</style>
