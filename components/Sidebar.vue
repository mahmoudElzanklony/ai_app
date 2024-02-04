<template>
  <div class="space-y-4 py-4 flex-col h-100 bg-white shadow-sm border-r">
    <div class="px-3 py-2 flex-1">
      <nuxt-link class="flex items-center mb-10" to="/">
        <div class="relative w-8 h-8 mr-4">
          <img src="/images/logo.svg">
        </div>
        <h2 class="text-2xl font-bold">AI system</h2>
      </nuxt-link>
      <nuxt-link v-for="(link,index) in DashboardLinks"
                 :to="link.link"
                 class="text-sm group text-primary flex p-3 cursor-pointer font-medium justify-start w-100 hover:bg-muted rounded mb-2"
                 :class="{'bg-muted':CurrentLink.path === link.link}"
                 :key="index">
        <div class="flex items-center">
          <icon :name="link['icon']" :class="`mr-3 w-5 h5 ${link.color}`" />
          {{ link['label'] }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {DashboardLinks} from "../utilies";
const CurrentLink = useRoute()
</script>



<style scoped>

</style>