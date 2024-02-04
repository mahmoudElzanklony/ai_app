<template>
  <div class="flex items-center p-4">
    <MobileSideBar></MobileSideBar>
    <div class="flex w-full justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button variant="outline">
            <icon name="lucide:user-circle"></icon>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-72">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div class="flex flex-end">
            <avatar>
              <avatar-image v-if="user?.meta_data" :src="user?.meta_data?.avatar_url"></avatar-image>
              <avatar-fallback>
                {{ user?.email?.charAt(0).toUpperCase() }}
                {{ user?.email?.charAt(1).toUpperCase() }}
              </avatar-fallback>
            </avatar>
            <div class="font-bold">
              <p class="mb-0">{{ user?.user_metadata?.full_name }}</p>
              <p class="mb-0">{{ user?.user_metadata?.email }}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="flex items-center">
            <icon class="h4 w-4 relative" name="lucide:log-out" />
            <span class="ml-2">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<script setup >

const  user  = useSupabaseUser();
console.log(user)
</script>

<style scoped>

</style>