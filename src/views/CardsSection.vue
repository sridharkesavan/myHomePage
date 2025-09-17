<template>
  <section id="cards" class="cards">
    <div class="section-heading text-center">
      <h2>Gallery</h2>
    </div>
    <div class="container">
      <div class="w-full overflow-x-auto scroll-smooth">
        <div class="flex space-x-4 px-4 py-6 snap-x snap-mandatory">
          <div v-for="(card, idx) in cards" :key="idx"
            class="min-w-[250px] bg-yellow-200 shadow-lg rounded-lg p-4 flex-shrink-0 snap-start">
            <h3 class="font-bold text-lg mb-2">{{ card.title }}</h3>
            <p class="text-gray-500">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
defineOptions({ name: 'ScrollableCardGallery' })
const cards = [
  { title: 'Card one', description: 'Some description here.' },
  { title: 'Card Two', description: 'Some description here.' },
  { title: 'Card Three', description: 'Some description here.' },
  { title: 'Card Four', description: 'Some description here.' }
]
</script>
