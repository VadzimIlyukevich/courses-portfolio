<script setup lang="ts">

import {ref} from 'vue'
import type { Ref } from 'vue'

const count: Ref<string | number> = ref(1)
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
</style>
