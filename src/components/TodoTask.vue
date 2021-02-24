<template>
  <div class="todo-task">
    <div class="todo-task__actions">
      <c-checkbox
        class="todo-task__checkbox"
        @click="checkboxHandler"
      />
      <c-datepicker class="todo-task__datepicker" />
      <c-edit-btn class="todo-task__edit-btn" />
      <c-delete-btn class="todo-task__delete-btn" />
    </div>
    <div class="todo-task__task-body">
      <c-text-field />
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
  methods: {
    checkboxHandler (e) {
      console.log(e)
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
