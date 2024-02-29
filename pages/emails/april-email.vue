<script setup>
const story = await useAsyncStoryblok('emails/april-email', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>