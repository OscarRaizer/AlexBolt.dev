<script setup lang="ts">
import TheName from '@/components/TheName.vue'
import TheDescription from '@/components/TheDescription.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
</script>

<template>
  <div
    class="bg-[#d6d5dd] md:h-screen p-3 font-demibold leading-none text-[#060218] md:overflow-hidden"
  >
    <section class="min-h-screen flex flex-col-reverse md:flex-col h-full gap-2 md:gap-5">
      <section class="grow h-full grid md:grid-cols-4 gap-15 md:gap-3 sm:grid-cols-1">
        <TheDescription />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </section>
      <TheName />
    </section>
  </div>
</template>

<style scoped></style>
