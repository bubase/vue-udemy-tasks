<template>
    <div class="input">
        <h3 class="title">Quote</h3>
        <!-- изменено дефолтное поведение при нажатии на enter -> создание quote, shift+enter -> перенос ввода на новую строку-->
        <el-input
            :style="{marginBottom: '20px'}"
            type="textarea"
            :rows="2"
            placeholder="Enter the quote"
            v-model="textarea"
            @keydown.enter.exact.prevent.native
            @keyup.enter.exact.native="addQuote(textarea)"
            @keydown.enter.shift.exact="newline"
            >
        </el-input>
        <el-button @click="addQuote(textarea)">Add Quote</el-button>
    </div>
</template>

<script>
export default {
    props: {
        quotes: Array,
        maxQuotes: Number
    },
    data() {
        return {
            textarea: ''
        }
    },
    methods: {
        newline() { // перенести на новую строку в el-input
        this.textarea = `${this.textarea}\n`;
    },
        addQuote(str) {
            if (str !== '' && this.quotes.length < this.maxQuotes) {
                this.quotes.push(str);
                this.textarea = '';                
            }
            else {
                return;
            }
        }
    }

}
</script>

<style>
    .input {
        width: 50%;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title {
        font-family: Georgia, serif;
        align-self: flex-start;
    }
</style>