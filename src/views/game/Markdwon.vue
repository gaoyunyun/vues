<template>
    <div id="main">
        <mavon-editor v-model="value"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    Vue.use(mavonEditor)
    new Vue({
        'el': '#main',
        data() {
            return { value: '' }
        }
    })
    // use
    Vue.use(mavonEditor)
    new Vue({
        'el': '#main',
        data() {
            return { value: '' }
        }
    })
    export default {
        name: "Markdwon"
    }
</script>

<style scoped>

</style>