<script setup lang="ts">
import { useGlobalStore } from '@/stores/GlobalStore'

const store = useGlobalStore()

const projects = store.projects
</script>
<template>
  <div>
    <h2 class="text-4xl tracking-tighter mb-10">Projects</h2>
    <ul class="flex flex-col gap-2 font-medium text-2xl leading-6">
      <li v-for="project in projects" :key="project.name" class="flex justify-between">
        <span>{{ project.name }}</span>
        <span class="text-lg text-[#adabba]">{{ project.role }}</span>
      </li>
    </ul>
  </div>
</template>
