<template>
  <div class="list-head">
    <h1 class="list-head__title">To Do list</h1>
    <div class="list-head__list-score">
      <div class="list-head__scope">
        Scope
        <p class="list-head__scope-score">{{totalTasks}}</p>
      </div>
      <div class="list-head__active">
        Active
        <p class="list-head__active-score">{{activeTasks}}</p>
      </div>
      <div class="list-head__successful">
        Successful
        <p class="list-head__successful-score">{{successfulTasks}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHead',
  props: {
    totalTasks: Number,
    activeTasks: Number,
    successfulTasks: Number
  }
}
</script>

<style lang="scss" scoped>
 .list-head {
   background-color: #889DEA;
   border-bottom-right-radius: 41px;
   color: #fff;
   padding: 8px 0 72px 0;

   &__title {
     text-align: center;
     font-weight: 900;
     font-size: 2.25rem;
     line-height: 2.25rem;
     margin-bottom: 32px;
   }
   &__list-score {
     display: flex;
     font-size: 0.85rem;
     line-height: 0.85rem;
   }
   &__scope {
     margin: 0 0 0 7.5%;
   }
   &__active {
     margin: 0 auto 0 auto;
   }
   &__successful {
     margin: 0 7.5% 0 0;
   }
   &__scope,
   &__active,
   &__successful {
     text-align: center;

     &-score {
       font-size: 4rem;
       font-weight: 600;
       line-height: 4rem;
     }
   }
 }
</style>
