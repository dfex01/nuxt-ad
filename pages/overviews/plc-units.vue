<script setup>
const story = await useAsyncStoryblok('overviews/plc-units', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>