<script setup lang="ts"></script>
<template>
  <div class="flex flex-col justify-between gap-10 h-full">
    <h2 class="md:text-6xl tracking-tighter sm:text-2xl text-wrap font-size">Frontend Engineer</h2>
    <p class="font-medium text-2xl leading-6 font-size-decription">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
</template>
<style scoped>
/* 30px - 60px */
.font-size {
  font-size: clamp(1.875rem, 1.5rem + 1.875vw, 3.75rem);
}

/* 20px - 30px */
.font-size-decription {
  font-size: clamp(1.25rem, 1.125rem + 0.625vw, 1.875rem);
}
</style>
