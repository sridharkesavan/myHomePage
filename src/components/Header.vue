<template>
  <header class="fixed top-0 w-full z-[9999] bg-white shadow">
    <nav class="lg:flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <!-- Logo/Brand (Left) -->
      <div class="flex items-center">
        <router-link to="/" class="-m-1.5 p-1.5 flex items-center gap-2">
          <img class="h-15 w-15" src="@/assets/logo/favicon.png" alt="kevin logo" />
        </router-link>

        <!-- Nav Links (Desktop Only, Centered) -->
        <PopoverGroup class="flex flex-1 justify-center gap-x-8">
          <a href="/" class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="About" class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="education"
            class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">Education</a>
          <a href="skills" class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">Skills</a>
          <a href="experience"
            class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">Experience</a>
          <a href="certifications"
            class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition">Certifications</a>
          <a href="contact"
            class="text-base font-semibold text-gray-700 hover:text-indigo-600 transition lg:flex items-center">Contact</a>
        </PopoverGroup>
      </div>
    </nav>
    <!-- Hamburger (Mobile Only) -->
    <div class="flex lg:hidden items-center justify-between w-full fixed top-0 left-0 bg-white z-[9999] px-4 py-4">
      <router-link to="/" class="-m-1.5 p-1.5 flex items-center gap-2">
        <img class="h-15 w-15" src="@/assets/logo/favicon.png" alt="kevin logo" />
      </router-link>
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 rounded-md" @click="mobileMenuOpen = true">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
    <!-- Mobile Menu (Dialog) -->
    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-2">
            <span class="sr-only">kevin</span>
            <img class="h-15 w-15" src="@/assets/logo/favicon.png" alt="kevin logo" />
            <span class="text-xl font-bold text-gray-700">kevin</span>
          </router-link>
          <button type="button" class="p-2.5 text-gray-700 rounded-md" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flex flex-col gap-2">
          <a href="/"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Home</a>
          <a href="About"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">About</a>
          <a href="education"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Education</a>
          <a href="skills"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Skills</a>
          <a href="experience"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Experience</a>
          <a href="certifications"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Certifications</a>
          <a href="contact"
            class="block rounded-lg px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Contact</a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PopoverGroup } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
/* Add any section-specific styles here */
</style>
