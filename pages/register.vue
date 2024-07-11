<template>
  <div class="h-[calc(100vh-50px)]">
    <div class="flex flex-col justify-center items-center h-full gap-4">
      <h1 class="font-bold text-4xl">Sign Up</h1>
      
      <form action="" @submit.prevent="submit" class="flex flex-col items-center justify-center gap-4 w-[200px] md:w-[300px] pb-4">
        <div class="w-full">
          <!-- <label for="username">Username</label> -->
          <UInput v-model="input.username" color="gray" type="text" name="username" id="username" placeholder="Username" />
        </div>

        <div class="w-full">
          <!-- <label for="name">Name</label> -->
          <UInput v-model="input.name" color="gray" type="text" name="name" id="name" placeholder="Name" />
        </div>

        <div class="w-full">
          <!-- <label for="email">Email</label> -->
          <UInput v-model="input.email" color="gray" type="text" name="email" id="email" placeholder="Email" />
        </div>

        <div class="w-full">
          <!-- <label for="password">Password</label> -->
          <UInput v-model="input.password" color="gray" type="password" name="password" id="password" placeholder="Password" />
        </div>
     
          <UButton class="w-full text-center flex justify-center" type="submit">Sign Up</UButton>
      </form>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'page'
  })

  const input = reactive({
    username: '',
    name: '',
    email: '',
    password: ''
  })

  const submit = () => {
    useAuth().registerWithEmail()
  }
</script>

<style>

</style>