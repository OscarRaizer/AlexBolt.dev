<script setup lang="ts">
import { useGlobalStore } from '@/stores/GlobalStore'
import { computed } from 'vue'
const store = useGlobalStore()
const skills = store.skills

const skillStyles = computed(() => {
  const isHighlightedEmpty = store.highlightedSkills.length === 0
  return skills.map((skill) => ({
    skill,
    color:
      isHighlightedEmpty || store.highlightedSkills.includes(skill)
        ? '#060218' // black
        : '#adabba', // gray
  }))
})
</script>

<template>
  <div>
    <h2 class="text-5xl tracking-tighter mb-10">Skills</h2>
    <ul class="flex md:flex-col gap-2 font-medium text-2xl leading-6 sm:flex-row flex-wrap">
      <li v-for="{ skill, color } in skillStyles" :key="skill">
        <span :style="{ color }">
          {{ skill }}
        </span>
      </li>
    </ul>
  </div>
</template>
