<template>
  <div class="w-full flex justify-center items-center">

    <div class="flex justify-between items-center h-[50px] w-full md:w-[80%] px-2 border-b">
      <div class="flex items-center gap-5">
        <NuxtLink v-for="(menu, i) in menus" :to="menu.to">{{menu.label}}</NuxtLink>
      </div>
  
      <div class="flex gap-3">
        <UButton class="hidden" variant="ghost">Sign in</UButton>
        <UButton variant="solid" to="/register">Sign Up</UButton>
        <ToggleColorMode />
      </div>
    </div>

  </div>
</template>

<script setup>
  const menus = [
    {label: 'Home', to: '/'},
    {label: 'Videos', to: '/'},
    {label: 'Dashboard', to: '/dashboard'},
  ]
</script>

<style>

</style>