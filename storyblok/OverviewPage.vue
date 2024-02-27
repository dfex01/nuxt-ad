<style>
    @import "assets/css/overviewRedesign.css"
</style>

<template>
  <div id="overviewContent"
    v-editable="blok">

    <div class="container mt-5" v-cloak
        id="top"
        :class="[blok.template == 2 ? 'template2' : null]">
        <div :class="[blok.template == 2 ? 'products' : null]">
            <div :class="[blok.template == 2 ? 'product' : null]">
                <h1>{{ blok.header }}</h1>
                <div v-if="blok.template == 1"
                    class="dropdown">
                    <p class="dropbtn">
                        Category Selection
                    </p>
                    <ul class="droplist">
                        <li v-for="panel of blok.productPanels">
                            <a :href='"#" + getPanelId(panel.header)'
                                class="droplink"
                                :title="'Scrolls down to' + panel.header">
                                {{panel.header}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div :class="mainContentWrapperClasses">
                    <div v-if="blok.mainContent[0].media.length"
                        class="col-span-5 text-center">
                        <img v-for="asset of blok.mainContent[0].media"
                            :src="asset.media[0].filename"
                            class="img-fluid" />
                    </div>
                    <div :class="mainContentTextColumnClasses"
                        v-html="mainContentHtml">
                    </div>
                </div>
                <p v-if="blok.template == 2 && blok.mainContent[0].startingAt.length"
                    class="text-center">
                    {{ blok.mainContent[0].startingAt[0].textBefore }}
                    <span class="price">
                       ${{getPrice(blok.mainContent[0].startingAt[0].pn)}}
                    </span>
                    {{ blok.mainContent[0].startingAt[0].textAfter }}
                    <br />
                    ({{blok.mainContent[0].startingAt[0].pn}})
                    
                </p>
            </div>
        </div>
        <div v-if="blok.template == 1" class="products grid grid-cols-12 grid-flow-col">
            <ProductPanel v-for="(panel, i) of blok.productPanels"
                :blok="panel"
                :panel-index="i"
                :panel-id="getPanelId(panel.header)">
            </ProductPanel>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import { renderRichText } from '@storyblok/vue';

    const props = defineProps({ blok: Object })

    function getPanelId(header) { 
        return header.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
    }
    function getProductPanelMainClasses(flags) {
        console.log("flags: ", flags)
        let classListString = "prod-main";
        if ( !flags.learnMore ) {
            classListString += " no-learn-more";
        }
        if ( !flags.startingAt.include ) {
            classListString += " no-starting-at";
        }
        if ( !flags.shopNow ) {
            classListString += " no-shopnow";
        }
        return classListString;
    }
    function getPrices() {
        if ( props.blok.template == 2 && props.blok.mainContent.startingAt.include ) {
            const pn = props.blok.mainContent.startingAt.pn;
            this.getPrice(pn)
                .then(price => {
                    props.blok.mainContent.startingAt.price = price;
                })
            .catch(err => {
                console.log(`Error fetching price for ${pn}: ${err.message}`);
            });
        }    
        if ( props.blok.panels.length ) {
            for ( let i=0; i < props.blok.panels.length; i++ ) {
                if ( props.blok.panels[i].flags.startingAt ) {
                    const pn = props.blok.panels[i].startingAt.pn;
                    this.getPrice(pn)
                        .then(price => {
                            props.blok.panels[i].startingAt.price = price;
                        })
                    .catch(err => {
                        console.log(`Error fetching price for ${pn}: ${err.message}`);
                    });
                }
            }
        }
    }
    function getPrice(pn) {
        return "N/A"
    }

    //computed
    const mainContentHtml = computed( () => {
        return renderRichText(props.blok.mainContent[0].html);
    });

    const mainContentWrapperClasses = computed( () => {
        return {
            "grid grid-cols-12 grid-flow-col": props.blok.mainContent[0].media.length,
            "px-3": props.blok.template == 1,
            "mt-3": props.blok.template == 1
        }
    });

    const mainContentTextColumnClasses = computed( () => {
        return {
            "col-span-7": props.blok.mainContent[0].media.length,
            "main-info": props.blok.template == 2,
            "mt-4": props.blok.template == 2,
            "mt-md-0": props.blok.template == 2,
        }
    });

    const mainContentShopNowLink = computed( () => {
        return "/adc/shopping/catalog/" + convertHeaderToLink(props.blok.header);
    });

    //mounted
    onMounted(() => {
        console.log("Mounted");
        console.log("props.blok: ", props.blok)
        docReadyFunction();
    })
</script>
