<template>
  <el-header class="header" height="null">
    <h1>Quotes added</h1>
    <el-progress  :stroke-width="26" 
                  :percentage="calcPercentage"
                  :text-inside="true"
                  :format="format">
    </el-progress>
  </el-header>
</template>

<script>
export default {
  props: {
    quotes: Array,
    maxQuotes: Number,
    calcPercentage: Number
  },
  methods: {
    format() {
      return `${this.quotes.length}/${this.maxQuotes}`;
    }
  }
}
</script>

<style scoped>
    .el-header {
      font-family: Georgia, serif;
      margin-bottom: 40px;
      border: 1px solid #dcdfe6;
      border-radius: 7px;
    }
    .el-progress {
      margin-bottom: 20px;
    }
</style>
<style>
  .header .el-progress-bar__inner {
    text-align: center;
  }
</style>