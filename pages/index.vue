<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">


const  user  = useSupabaseUser();
  console.log(user)
</script>

<style scoped>

</style>