<!-- 组件模板 -->
<template>
    <div id="app">
        <github></github>
    </div>
</template>

<!-- 组件脚本 -->
<script>
    import Vue from 'vue';
    import Github from '../components/Github';

    export default Vue.extend({
        name: 'App',
        components: {
            'Github': Github
        }
    });
</script>

