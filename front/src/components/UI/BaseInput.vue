<script setup lang="ts">

</script>

<template>
  <div class="relative">
    <input
        class="py-2 text-sm placeholder-top
      bg-transparent text-greyBase border-0 border-b border-b-white
      focus:outline-0 "
    >
    <span class="placeholder">login</span>
  </div>
</template>

<style scoped>
.placeholder-top:focus ~ .placeholder,
.placeholder-top:not(:focus):valid ~ .placeholder{
  top: -0.5em;
  opacity: 1;
}

.placeholder {
  position: absolute;
  pointer-events: none;
  left: 0.5em;
  top: 0.5em;
  transition: 0.2s ease all;
}

</style>