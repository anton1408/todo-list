<template>
  <div class="c-datepicker">
    <datepicker
      v-model="model"
      :inputClass="className"
      monday-first
      @selected="selectedDate"
    />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'CDatepicker',
  components: {
    Datepicker
  },
  props: {
    date: {
      type: [Date, Number],
      default: () => new Date()
    },
    disabled: {
      type: Boolean,
      default: () => true
    }
  },
  data: () => ({
    model: null
  }),
  computed: {
    className () {
      return {
        'c-datepicker__input': true,
        'c-datepicker__input--disabled': this.disabled
      }
    }
  },
  mounted () {
    this.model = new Date(this.date)
  },
  methods: {
    selectedDate (e) {
      this.$emit('input', Date.parse(e))
    }
  }
}
</script>

<style lang="scss">
  .c-datepicker__input {
    border: none;
    outline: none;
    font-size: 0.85rem;
    line-height: 0.85rem;
    color: #889dea;
    cursor: pointer;
    width: 70px;
    text-align: center;

    &--disabled {pointer-events: none;}
  }
</style>
