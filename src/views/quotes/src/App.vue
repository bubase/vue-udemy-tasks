<template>
  <div id="app">
    <app-header :calcPercentage="calcPercentage" :quotes="quotes" :maxQuotes="maxQuotes"></app-header>
    <app-add-quote :quotes="quotes" :maxQuotes="maxQuotes"></app-add-quote>
    <app-quote-list :quotes="quotes" :maxQuotes="maxQuotes"></app-quote-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import AddQuote from './components/AddQuote';
import QuoteList from './components/QuoteList';

export default {
  data() {
    return {
      quotes: [],
      maxQuotes: 8
    }
  },
  computed: {
      calcPercentage() {
        return (100 * this.quotes.length) / this.maxQuotes ; 
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appAddQuote: AddQuote,
    appQuoteList: QuoteList
  }
}
</script>

<style scoped>
  #app {
    margin: 0 5%;
    display: flex;
    flex-direction: column;
  }
</style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Arizonia');
</style>