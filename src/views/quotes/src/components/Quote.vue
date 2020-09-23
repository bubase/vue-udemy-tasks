<template>
     <el-card shadow="hover">
        <slot></slot>
    </el-card>
</template>

<script>
export default {

}
</script>

<style scoped>
    .el-card {
        margin: 20px; 
        max-width: 20%;
        cursor: pointer;
        height: fit-content;
        font-family: 'Arizonia';
        font-size: 40px;
    }
</style>