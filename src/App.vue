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
    <div class="min-h-screen flex md:flex-col h-full gap-5 sm: flex-col-reverse">
      <section class="flex-grow h-full">
        <div class="grid md:grid-cols-4 h-full gap-3 sm:grid-cols-1">
          <TheDescription />
          <SkillsSection />
          <ProjectsSection />
          <ContactsSection />
        </div>
      </section>
      <TheName />
    </div>
  </div>
</template>

<style scoped>
* {
  outline: 1px solid red;
}
</style>
