<script setup>
const story = await useAsyncStoryblok('february-email', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>