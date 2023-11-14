<script setup lang="ts">

import AuthForm from "../forms/AuthForm.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import router from "../routers";
</script>

<template>
  <div class="w-full h-full pt-44 flex justify-center">
    <div class="container flex flex-col justify-center items-center">
      <h1 class="text-greyBase text-3xl">Sign Up</h1>
      <auth-form :is-registration-page="true" />
      <div class="text-xs mt-2">
        <span class="text-gray-500">Already registred?</span>
        <router-link to="/signIn">
          sign in
        </router-link>
      </div>
      <div class="mt-5">
        <base-button
            class="mr-5"
            text="Cancel"
            :outline='true'
            @click="router.push('/')"
        />
        <base-button
            text="Sign Up"
            :reverse-style=true
            @click="router.push('/')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>