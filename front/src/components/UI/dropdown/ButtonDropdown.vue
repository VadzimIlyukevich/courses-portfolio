<script setup lang="ts">
import {ref} from "vue";

interface ItemDropdown {
  'name': string,
  'url': string,
}

defineProps<{
  'title': string,
  'id': string,
  'arrayDropdown': ItemDropdown[],
}>()
const isHover = ref(false)
const isActive = ref(false)
const toggleActive = ()=>{
  isActive.value = !isActive.value
}
</script>

<template>
  <div @mouseover="isHover = true"
       @mouseleave="isHover=false"
       class='relative'
  >
    <button :id=id
            class="text-greyBase transition ease-in-out duration-200 hover:bg-violet-800 hover:border-1 hover:border-transparent hover:border focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-base px-2 py-2 text-center inline-flex items-center dark:hover:bg-violet-700 dark:focus:ring-violet-800"
            type="button"
            @click="toggleActive"
            @blur="toggleActive"
    >
      {{ title }}
      <svg class="w-2.5 h-2.5 ml-2.5"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 10 6">
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    <div v-show="isHover || isActive"
         :id=id
         class="absolute top-10 left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700
        transition linear duration-500">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="dropdownLink in arrayDropdown" :key="dropdownLink.name">
          <router-link :to="dropdownLink.url"
             class="block px-4 py-2
             hover:bg-gray-100 hover:underline dark:hover:bg-gray-600 dark:hover:text-white">{{
              dropdownLink.name
            }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>