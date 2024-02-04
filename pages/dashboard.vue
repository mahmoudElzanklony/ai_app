<template>
  <div class="ml-24 mr-24">
    <h2 class="text-2xl md:text-4xl font-bold text-center">Explore power of AI</h2>
    <p class="font-light muted text-center text-muted-foreground mt-3">chat with smartest AI to help you in your work</p>
    <div v-for="(link,index) in DashboardLinks" :key="index"
         @click="navigateTo(link.link)"
         class="p-4  border-muted flex items-center justify-between rounded hover:shadow-sm transition cursor-pointer">
        <div class="flex items-center gap-x-4">
          <div :class="`p-2 w-fit rounded-md ${link.bgColor}`">
            <icon :name="link.icon" :class="`w-8 h-8 ${link.color}`"></icon>
          </div>
          <div class="font_semibold">
            {{ link.label }}
          </div>
        </div>
        <icon name="lucide:arrow-right" class="w-5 h-5"></icon>
    </div>
  </div>
</template>

<script setup>
import {DashboardLinks} from "../utilies";
</script>

<style scoped>

</style>