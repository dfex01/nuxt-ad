<template>
  <div v-editable="blok" :class="getColumnClass()">
    <div class="prod" id="panelId">
        <div class="prod-main" :class="prodMainClasses">
            <div class="prod-img">
                <template v-if="blok.categoryUrl.length">
                    <a :href="overviewUrl">
                        <img :src="blok.image.filename"
                            class="img-fluid inline-block" />
                    </a>
                </template>
                <template v-else>
                    <img :src="blok.image.filename"
                        class="img-fluid" />
                </template>
            </div>
            <h2>
                <template v-if="blok.categoryUrl.length">
                    <a :href="overviewUrl">
                        {{blok.header}}
                    </a>
                </template>
                <template v-else>
                    {{blok.header}}
                </template>
            </h2>
            <div v-html="renderRichText(blok.mainContent)"></div>
        </div>
        <div class="prod-sec">
            <p v-if="props.blok.startingAt[0]" class="prod-price">
                {{props.blok.startingAt[0].textBefore}}
                <br />
                <span class="price">
                    $N/A
                </span>
                <template v-if="props.blok.startingAt[0].textAfter.length">
                    {{props.blok.startingAt[0].textAfter}}
                </template>
                <br />
                ({{props.blok.startingAt[0].pn}})
            </p>
            <div v-if="props.blok.shopNowButton" class="shop-btn">
                <a :href="shoppingUrl" title="Shop Now">
                    <button type="button" class="green-btn">
                        Shop Now
                    </button> 
                </a>
            </div>
            <a v-if="props.blok.learnMore" :href="overviewUrl">
                <div class="learn-bar">
                    LEARN MORE
                </div>
            </a>
        </div>
    </div>
</div>    
</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import { renderRichText } from '@storyblok/vue';

    const props = defineProps({
        blok: Object,
        panelIndex: Number,
        panelId: String
    });

    console.log("props.blok.startingAt: ", props.blok.startingAt)

    //methods
    function getColumnClass() {
        switch ( props.panelIndex ) {
            case 0:
                return "xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12";
            case 1:
                return "xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 mt-5 md:mt-0";
            case 2:
                return "xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 mt-5 lg:mt-0";
            case 3:
                return "xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 mt-5 xl:mt-0";
            default:
                return "xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 mt-5";
        }
    }

    //computed
    const overviewUrl = computed( () => {
        console.log("props: ", props)
        return 'https://www.automationdirect.com/adc/overview/' + props.blok.categoryUrl;
    });
    const shoppingUrl = computed( () => {
        return 'https://www.automationdirect.com/adc/shopping/' + props.blok.categoryUrl;
    });
    const prodMainClasses = computed( () => {
        let classes = "";
        if ( !props.blok.startingAt.length ) {
            classes += " no-starting-at";
        }
        if ( !props.blok.learnMore ) {
            classes += " no-learn-more";
        }
        if ( !props.blok.shopNowButton ) {
            classes += " no-shopnow";
        }
        return classes;
    });
    onMounted( () => {
        console.log("panel mounted")
    })
</script>
