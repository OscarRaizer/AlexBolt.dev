<script setup lang="ts">
import { useGlobalStore } from '@/stores/GlobalStore'

const store = useGlobalStore()

const contacts = store.contacts
</script>
<template>
  <arcticle class="flex flex-col justify-between md:gap-10 h-full">
    <h2 class="text-3xl tracking-tighter mb-10 text-contacts-title">Contacts</h2>
    <div class="flex flex-col gap-2">
      <a
        v-for="contact in contacts"
        :key="contact.name"
        class="font-medium text-contacts-title leading-none hover:bg-[#060218] hover:text-[#d6d5dd]"
        :href="contact.link"
        >{{ contact.name }}</a
      >
    </div>
  </arcticle>
</template>
