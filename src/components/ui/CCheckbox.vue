<template>
  <div
    class="c-checkbox"
    @click="click"
  >
    <checkbox-true-icon v-if="value" />
    <checkbox-false-icon v-else />
  </div>
</template>

<script>
import CheckboxFalseIcon from '@/components/svg/CheckboxFalseIcon'
import CheckboxTrueIcon from '@/components/svg/CheckboxTrueIcon'

export default {
  name: 'CCheckbox',
  components: {
    'checkbox-false-icon': CheckboxFalseIcon,
    'checkbox-true-icon': CheckboxTrueIcon
  },
  data: () => ({
    value: false
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
.c-checkbox {
  cursor: pointer;
}
</style>
