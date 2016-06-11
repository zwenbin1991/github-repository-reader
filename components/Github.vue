<!-- 组件模板 -->
<template>
    <div id="container">
        <div class="search">
            <label for="text">Remote Repo Name：</label>
            <input id="text" placeholder="请输入远程仓库名" />
            <button>获&nbsp;&nbsp;取</button>
        </div>
        <file-reader></file-reader>
    </div>
</template>

<!-- 脚本 -->
<script>
    import Vue from 'Vue';
    import FileReader from './FileReader.vue';

    export default Vue.extend({
        name: 'Github',

        components: {
            'FileReader': FileReader
        }
    });
</script>

<!-- 样式 -->
<style>
    .search {
        line-height: 40px;
    }

    .search label,
    .search input,
    .search button {
        display: inline-block;
    }

    .search label {
        vertical-align: middle;
    }

    .search input {
        width: 200px;
        color: #333;
        line-height: 28px;
        border: 1px solid #666;
        padding: 5px 0 5px 5px;
        font-size: 12px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .search button {
        width: 48px;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        padding: 4px;
    }
</style>