<template>
    <div class="quote-list">
            <!-- eslint-disable-next-line -->
        <quote v-for="(quote, index) in quotes"
               @click.native="quotes.splice(index, 1)">
               {{ quote }}
        </quote>
    </div>
</template>

<script>
import Quote from './Quote';

export default {
    props: {
        quotes: Array,
        maxQuotes: Number
    },
    components: {
        Quote
    },
    methods: {
        addQuote(str) {
            this.quotes.push(str);
        }
    }
}
</script>

<style scoped>
    .quote-list {
        display: flex;
        flex-wrap: wrap;
    }
</style>