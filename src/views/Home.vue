<template>
  <div class="home">
    <list-head />
    <list-body />
  </div>
</template>

<script>
import ListHead from '@/components/ListHead'
import ListBody from '@/components/ListBody'

export default {
  name: 'Home',
  components: {
    'list-head': ListHead,
    'list-body': ListBody
  }
}
</script>
