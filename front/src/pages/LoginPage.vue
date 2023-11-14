<script setup lang="ts">

import router from "../routers";
import BaseButton from "../components/UI/BaseButton.vue";
import AuthForm from "../forms/AuthForm.vue";
</script>

<template>
  <div class="w-full h-full pt-44 flex justify-center">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-greyBase text-3xl">Sign In</h1>
      <auth-form />
      <div class="w-full flex justify-between text-xs mt-2">
        <router-link to="/signIn">
          Forgot password?
        </router-link>
        <router-link to="/signUp">
          Sign up
        </router-link>
      </div>
      <div class="mt-5">
        <base-button
            text="Sign In"
            :reverse-style=true
            @click="router.push('/')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>