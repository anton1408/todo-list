<template>
  <div
    :class="className"
    class="c-btn"
    @click="click"
  >
    <template v-if="icon">
      <slot />
    </template>
    <template v-else>
      <slot name="prependIcon" />
      <span class="c-btn__title">{{title}}</span>
      <slot name="appendIcon" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CBtn',
  props: {
    title: {
      type: String,
      default: () => 'Button'
    },
    icon: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    className () {
      return {
        'c-btn__disabled': this.disabled,
        'c-btn__view--default': !this.icon,
        'c-btn__view--icon': this.icon
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-btn {
    background-color: #88EAA9;
    color: #fff;
    cursor: pointer;
    user-select: none;

    &:hover { background-color: #67e58f; }

    &__title { padding: 0 13px; }

    &__view--default {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-radius: 11px;
      padding: 12px 0;
      font-size: 1rem;
      line-height: 1.7rem;
    }

    &__view--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
    }

    &__disabled { pointer-events: none; }
  }

</style>
