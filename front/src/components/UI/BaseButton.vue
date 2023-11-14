<script setup lang="ts">
interface Props {
  'text': string,
  'reverseStyle'?: { type:boolean, default: false },
  'outline'?: boolean
}
defineProps<Props>()
</script>

<template>
  <button
          class="button"
          type="button"
          :class="{'bg-gradient-to-r from-violet-900 to-purple-500 border-0 hover:border-0 hover:bg-gradient-to-l active:from-violet-950 active:to-purple-600':reverseStyle,
                   'border-2 border-zinc-700 hover:border-2 hover:border-violet-700 hover:bg-transparent':outline }"
  >
    {{text}}
  </button >
</template>

<style scoped>

</style>