<script setup>
const story = await useAsyncStoryblok('overviews/barcode', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>