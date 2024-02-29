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
    .issue-no {
        border-top: 2px solid rgb(98, 98, 98);
        border-bottom: 2px solid rgb(98, 98, 98);
        font-size: 22px;
        padding: 12px 0px;
    }
</style>

<template>
    <div class="email-wrapper mx-auto">
        <img src="https://cdn.automationdirect.com/static/images/logos/1024x154.png"
            class="adc-img mx-auto" />
        <div class="issue-no text-center">
            Newsletter Volume {{ blok.volume }} Issue {{ blok.issue }}
        </div>
        <div class="banner">
            <img :src="blok.banner.filename" class="mx-auto" />
        </div>

        <div v-editable="blok" v-html="headlineHtml"></div>

        <div class="grid grid-cols-12 grid-flow-col">
            <EmailStory v-for="story of blok.stories"
                :blok="story">
            </EmailStory>
        </div>

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
