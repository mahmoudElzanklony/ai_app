<template>
  <div class="h-full relative">
    <div class="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80">
      <!-- sidebar -->
      <sidebar></sidebar>
    </div>
    <div class="md:pl-72 pb-10">
      <!-- navbar -->
      <Navbar></Navbar>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "../components/Navbar.vue";

export default {
  components: {Navbar}
}
</script>



<style scoped>

</style>