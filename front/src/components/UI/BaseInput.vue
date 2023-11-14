<script setup lang="ts">
import {computed} from "vue";

type valueType = string | number
const props = defineProps<{
  'placeholder': string,
  'modelValue'?: valueType,
  'type'?: string,
}>()
defineEmits(['update:modelValue'])

const isHaveValue = computed(()=>{
  return !!props.modelValue
})
</script>

<template>
  <div class="relative">
    <input
        :type="type"
        class="w-72 py-2 text-sm placeholder-top transition ease-linear
      bg-transparent text-greyBase border-0 border-b border-b-white
      focus:outline-0 focus:border-b-violet-700"
        :model-value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
    >
    <span
        class="placeholder text-greyBase"
        :class="{'haveValue':isHaveValue}"
    >{{ placeholder }}</span>
  </div>
</template>

<style scoped>
.placeholder {
  position: absolute;
  pointer-events: none;
  left: 0.3em;
  top: 0.5em;
  transition: 0.2s ease all;
}

.placeholder-top:focus ~ .placeholder,
.haveValue{
  scale: 85%;
  top: -0.7em;
  left: 0;
  opacity: 1;
  color: #a78bfa;
}
</style>