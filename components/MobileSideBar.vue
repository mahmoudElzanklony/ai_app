<template>

  <Sheet class="md:hidden">
    <SheetTrigger as-child >
      <Button variant="outline" class="md:hidden pr-4 hover:opacity-75 transition">
        <Icon name="lucide:menu" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left"  class="p-0 bg-white">
      <Sidebar  />
    </SheetContent>
  </Sheet>

</template>

<script>
import Sidebar from "./Sidebar";
export default {
  name: "MobileSideBar",
  components: {Sidebar}
}
</script>

<style scoped>

</style>