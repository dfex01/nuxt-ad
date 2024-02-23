<script setup>
const story = await useAsyncStoryblok('barcode', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>