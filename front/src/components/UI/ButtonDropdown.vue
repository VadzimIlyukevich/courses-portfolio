<script setup lang="ts">
defineProps<{
  'title': string,
  'id': string,
}>()
</script>

<template>
  <button :id=id data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          class="text-white hover:bg-violet-800 hover:border-1 hover:border-transparent hover:border focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-base px-2 py-2 text-center inline-flex items-center dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          type="button">{{ title }}
    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
  </button>
</template>

<style scoped>

</style>