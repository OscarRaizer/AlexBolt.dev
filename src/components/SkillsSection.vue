<script setup lang="ts">
import { useGlobalStore } from '@/stores/GlobalStore'

const store = useGlobalStore()

const skills = store.skills
</script>
<template>
  <div>
    <h2 class="text-5xl tracking-tighter mb-10">Skills</h2>
    <ul class="flex flex-col gap-2 font-medium text-2xl leading-6">
      <li v-for="skill in skills" :key="skill">
        <span>{{ skill }}</span>
      </li>
    </ul>
  </div>
</template>
