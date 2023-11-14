<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
import ButtonDropdown from "./UI/dropdown/ButtonDropdown.vue";
import SearchImage from "../assets/img/SearchImage.vue";
import CartImage from "../assets/img/CartImage.vue";
import router from "../routers";
import {ref} from "vue";

const isHover = ref(false)

</script>

<template>
  <header class="w-full h-max bg-neutral-900" >
    <nav class="flex w-full min-w-max justify-between px-6 py-3 lg:px-8" >
      <div class="container min-w-max mx-auto flex flex-row items-center" >
        <h2 class="text-2xl font-bold p-2 cursor-pointer"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
        @click="router.push('/')">
          <span class="text-transparent text-bold bg-clip-text"
                :class="{'bg-gradient-to-r from-violet-800 to-sky-400' : isHover,
                         'bg-gradient-to-r to-violet-800 from-sky-400': !isHover}">you</span>
          <span class="text-transparent bg-clip-text transition ease-in-out duration-200
          " :class="{'bg-gradient-to-r to-violet-800 from-sky-400' : isHover,
                     'bg-gradient-to-r from-violet-800 to-sky-400':!isHover}">courses</span>
        </h2>
        <button-dropdown
        title="categories"
        id="categories"
        :array-dropdown="[
        {name:'frontend', url: '/front'},
        {name:'backend', url: '/back'},
          ]"
        />
        <base-button
        text="all courses"
        @click="router.push('/courses')"
        />
      </div>
      <div class="container mx-auto flex flex-row-reverse items-center">
        <base-button
            text="sigh in"
            @click="router.push('/signIn')"
        />
        <base-button
            text="sigh up"
            @click="router.push('/signUp')"
            reverse-style= true
        />
        <cart-image @click="router.push('/cart')" />
        <search-image @click="router.push('/search')" />
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>