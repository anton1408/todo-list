<template>
  <div class="c-datepicker">
    <datepicker
      v-model="date"
      inputClass="c-datepicker__input"
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
  data: () => ({
    date: new Date()
  })
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

  }
</style>
