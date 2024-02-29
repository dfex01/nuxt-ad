<script setup>
const story = await useAsyncStoryblok('click-plcs', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>