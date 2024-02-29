<script setup>
const story = await useAsyncStoryblok('overviews/programmable-logic-controllers', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>