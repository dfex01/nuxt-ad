<script setup>
const story = await useAsyncStoryblok('emails/march-email', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>