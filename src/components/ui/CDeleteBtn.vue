<template>
  <div
    class="c-delete-btn"
    @click="click"
  >
    <trash-icon />
  </div>
</template>

<script>
import TrashIcon from '@/components/svg/TrashIcon'

export default {
  name: 'CDeleteBtn',
  components: {
    'trash-icon': TrashIcon
  },
  methods: {
    click () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-delete-btn {
    cursor: pointer;
  }
</style>
