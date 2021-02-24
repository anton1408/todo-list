<template>
  <svg :width="size" :height="size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 4.99997V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.50001 12H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'PlusIcon',
  props: {
    size: {
      type: [Number, String],
      default: () => 25
    }
  }
}
</script>
