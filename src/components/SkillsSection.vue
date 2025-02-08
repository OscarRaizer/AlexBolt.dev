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
  <article>
    <h2 class="tracking-tighter mb-10 text-skills">Skills</h2>
    <ul class="flex md:flex-col gap-2 font-medium text-2xl leading-none sm:flex-row flex-wrap">
      <li v-for="{ skill, color } in skillStyles" class="flex items-center" :key="skill">
        <span :style="{ color }">
          {{ skill }}
        </span>
      </li>
    </ul>
  </article>
</template>
