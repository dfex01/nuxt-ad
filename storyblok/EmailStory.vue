<style scoped>
    .headline {
        padding-top: 10px;
        font-size: 22px;
    }
    .headline, .learnmore {
        color: #1188E6;
        text-decoration: underline;
    }
</style>

<template>
  <div v-editable="blok" class="email-story col-span-6 px-2">
    <img v-if="blok.image" :src="blok.image.filename" />

    <p class="headline">
        <a :href="blok.linkUrl">
            {{blok.headline}}
        </a>
    </p>
    <div v-html="renderRichText(blok.mainContent)" class="mt-1"></div>
    <p class="learnmore">
        <a :href="blok.linkUrl">
            Learn more
        </a>
    </p>
  </div>
</template>

<script setup>
    import { renderRichText } from '@storyblok/vue';
    defineProps({ blok: Object });
</script>
