<script setup lang="ts">

import BaseInput from "../components/UI/BaseInput.vue";
import {ref} from "vue";
defineProps<{
  isRegistrationPage?: {type:boolean, default:false}
}>()
const login = ref()
const password = ref()
const confirmPassword = ref()
</script>

<template>
  <form class="mt-16">
    <base-input
        class="mt-5"
        placeholder="login"
        v-model="login"
    />
    <base-input
        class="mt-5"
        type="password"
        placeholder="password"
        v-model="password"
    />
    <base-input
        v-if="isRegistrationPage"
        class="mt-5"
        type="password"
        placeholder="confirm password"
        v-model="confirmPassword"
    />
  </form>
</template>

<style scoped>

</style>