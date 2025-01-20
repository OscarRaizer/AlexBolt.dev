<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheHero from '@/components/TheHero.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
</script>

<template>
  <div class="bg-[#d6d5dd] h-screen p-3 font-demibold leading-none text-[#060218] overflow-hidden">
    <div class="min-h-screen flex flex-col h-full gap-5">
      <section class="flex-grow h-full">
        <div class="grid grid-cols-4 h-full gap-3">
          <TheHero />
          <SkillsSection />
          <ProjectsSection />
          <ContactsSection />
        </div>
      </section>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped></style>
