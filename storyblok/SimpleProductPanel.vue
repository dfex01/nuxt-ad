<style scoped>
    .starting-at {
        color: #1188E6;
        text-decoration: underline;
    }
</style>

<template>
  <div v-editable="blok" class="now-available col-span-4 px-2 text-center">
    <img v-if="blok.image" :src="blok.image.filename" />

    <p>
        {{blok.mainText}}
    </p>
    <div v-html="renderRichText(blok.mainContent)" class="mt-1"></div>
    <p class="starting-at">
        <a :href="blok.linkUrl">
            {{blok.startingAt[0].textBefore}}
            $N/A 
            {{blok.startingAt[0].textAfter}}
        </a>
    </p>
  </div>
</template>

<script setup>
    import { renderRichText } from '@storyblok/vue';
    defineProps({ blok: Object });
</script>
