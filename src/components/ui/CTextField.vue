<template>
  <div class="c-text-field">
    <textarea
      v-model="fieldValue"
      :placeholder="placeholder"
      type="text"
      rows="1"
      class="c-text-field__textarea"
      @input="emitValue"
    />
  </div>
</template>

<script>
import mixinAutoResize from '@/components/mixins/autoResize'

export default {
  name: 'CTextField',
  mixins: [mixinAutoResize],
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => 'Please enter task description'
    }
  },
  data: () => ({
    fieldValue: '',
    fieldType: ''
  }),
  mounted () {
    this.fieldValue = this.value
  },
  methods: {
    emitValue (e) {
      this.mixin_autoResize_resize(e)
      this.$emit('input', this.fieldValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-text-field {
  border-bottom: 1px solid #c7c7c7;
  padding: 0  60px 0 26px;

  &__textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #000000;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    resize: none;
  }
  &__textarea[placeholder],
  &__textarea::-moz-placeholder,
  &__textarea:-moz-placeholder,
  &__textarea:-ms-input-placeholder {color: rgba(102, 102, 102, 0.466455);}
  &__textarea:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
  &__textarea:focus::-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
  &__textarea:focus:-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
  &__textarea:focus:-ms-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
}
</style>
