<script setup lang="ts">
import { useGlobalStore } from '@/stores/GlobalStore'

const store = useGlobalStore()
const projects = store.projects

const setHighlightedSkills = (skills: string[]) => {
  store.setHighlightedSkills(skills)
}

const resetHighlightedSkills = () => {
  store.resetHighlightedSkills()
}
</script>

<template>
  <div>
    <h2 class="text-4xl tracking-tighter mb-10">Projects</h2>
    <ul class="flex flex-col gap-2 font-medium text-2xl leading-6">
      <li
        v-for="project in projects"
        :key="project.name"
        class="group hover:bg-[#060218] hover:text-[#d6d5dd]"
        @mouseenter="setHighlightedSkills(project.skills)"
        @mouseleave="resetHighlightedSkills"
      >
        <a class="flex justify-between" target="_blank" :href="project.link"
          ><span class="text-[#060218] group-hover:text-[#e4e3e8]">{{ project.name }}</span
          ><span class="text-[#adabba] text-xl">{{ project.role }}</span></a
        >
      </li>
    </ul>
  </div>
</template>
