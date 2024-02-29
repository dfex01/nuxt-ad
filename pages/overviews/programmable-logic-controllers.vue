<script setup>
const story = await useAsyncStoryblok('programmable-logic-controllers', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>