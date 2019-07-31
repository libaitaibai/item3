<template>
    <div>
        <input type="button" value="增加" @click="jia">
        <input type="button" value="减少" @click="jian"><br>
        <input type="text" value="" v-model="numbtn">
    </div>
</template>
<script>
export default {
    data () {
        return {
            numbtn: ''
        }
    },
    methods: {
        jian () {
            this.numbtn=this.numbtn-1
        },
        jia () {
            this.numbtn++
        }
    },
}
</script>
<style lang="less" scoped>

</style>