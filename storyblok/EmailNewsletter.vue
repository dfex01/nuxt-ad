<style>
    @import "assets/css/overviewRedesign.css"
</style>

<template>
    <div class="banner">
        <img :src="blok.banner.filename" />
    </div>
  <div v-editable="blok" v-html="headlineHtml">
  </div>
  <div v-editable="blok" v-html="footerHtml">
  </div>
</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import { renderRichText } from '@storyblok/vue';

    const props = defineProps({ blok: Object })    

    console.log("props.blok: ", props.blok)

    const headlineHtml = renderRichText(props.blok.headline);
    const footerHtml = renderRichText(props.blok.footer);

</script>
