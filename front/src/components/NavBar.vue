<script setup lang="ts">

import ButtonDropdown from "./UI/ButtonDropdown.vue";
</script>

<template>
  <header class="sticky w-full bg-neutral-900">
    <nav class="flex max-w-7xl justify-between p-6 lg:px-8">
      <div class="container mx-auto flex flex-row items-center">
        <h2 class="text-2xl font-bold p-2">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-violet-800 from-sky-400">you</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-sky-400">courses</span>
        </h2>
        <button-dropdown
          id="Courses"
          title="Courses"
        />
      </div>
      <div class="container mx-auto">
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>