<style scoped>

    .email-wrapper {
       width:100%;
       max-width:800px;
    }
    .adc-img {
        display: block;
        color: #000000;
        text-decoration: none;
        font-family: Helvetica, arial, sans-serif;
        font-size: 16px;
        max-width: 80% !important;
        width: 80%;
        height: auto !important;
    }
</style>

<template>
    <div class="email-wrapper mx-auto">
        <img src="https://cdn.automationdirect.com/static/images/logos/1024x154.png"
            class="adc-img" />
        <div class="issue-no">
            Newsletter Volume {{ blok.volume }} Issue {{ blok.issue }}
        </div>
        <div class="banner">
            <img :src="blok.banner.filename" />
        </div>

        <div v-editable="blok" v-html="headlineHtml"></div>
        <div v-editable="blok" v-html="footerHtml"></div>
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
