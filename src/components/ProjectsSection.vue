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
    <h2 class="tracking-tighter mb-10 text-projects">Projects</h2>
    <ul class="flex flex-col font-medium text-2xl leading-none">
      <li
        v-for="project in projects"
        :key="project.name"
        class="group hover:bg-[#060218] hover:text-[#d6d5dd]"
        @mouseenter="setHighlightedSkills(project.skills)"
        @mouseleave="resetHighlightedSkills"
      >
        <a class="flex flex-col" target="_blank" :href="project.link">
          <div class="flex justify-between items-center gap-3">
            <span class="text-[#060218] group-hover:text-[#e4e3e8]">{{ project.name }}</span>
            <span class="text-[#adabba] text-xl text-end">{{ project.role }}</span>
          </div>
          <div class="h-1.5 bg-[#d6d5dd]"></div
        ></a>
      </li>
    </ul>
  </div>
</template>
<style></style>
