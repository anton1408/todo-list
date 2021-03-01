<template>
  <div
    class="c-edit-btn"
    @click="click"
  >
    <edit-icon v-if="value" />
    <confirm-icon v-else />
  </div>
</template>

<script>
import EditIcon from '@/components/svg/EditIcon'
import ConfirmIcon from '@/components/svg/ConfirmIcon'

export default {
  name: 'CEditBtn',
  components: {
    'edit-icon': EditIcon,
    'confirm-icon': ConfirmIcon
  },
  data: () => ({
    value: true
  }),
  methods: {
    click () {
      this.value = !this.value
      this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-edit-btn {
  cursor: pointer;
}
</style>
