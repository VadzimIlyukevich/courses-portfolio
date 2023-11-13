<script setup lang="ts">
defineProps<{
  'text': string,
  'reverseStyle'?: {
    type:boolean,
    default: false
  }
}>()
</script>

<template>
  <button
          class="text-greyBase font-bold transition ease-linear duration-100
          active:hover:bg-violet-900
          hover:border-1 hover:border-transparent hover:border
          dark:hover:bg-violet-700 focus:outline-0
          rounded-lg text-base px-4 py-2 mx-1 text-center inline-flex items-center"
          type="button"
          :class="{'bg-gradient-to-r from-violet-900 to-purple-500 border-0 hover:border-0 hover:bg-gradient-to-l active:from-violet-950 active:to-purple-600':reverseStyle}"
  >
    {{text}}
  </button >
</template>

<style scoped>

</style>