<!-- 组件模板 -->
<template>
    <div class="file-wrap">
        <div class="file-head">当前路径：/</div>
        <div class="file-row clearfix">
            <span class="content">1</span>
            <span class="message">2</span>
            <span class="time">343</span>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'FileReader'
    });
</script>

<style>
    .file-wrap {
        line-height: 32px;
    }

    .file-wrap .file-row:hover {
        background-color: #f1f1f1;
    }

    .file-wrap .file-row {
        border-top: 1px solid #f8fcf8;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;    
    } 
    
    .file-wrap .file-row > span {
        float: left;
        width: 33%;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .file-wrap .content,
    .file-wrap .message,
    .file-wrap .time {
        padding-left: 12px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .file-wrap .time {
        text-align: right;
    }
</style>