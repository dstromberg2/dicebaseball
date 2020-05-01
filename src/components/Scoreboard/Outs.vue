<template>
    <div class="outs-wrapper">
        Outs
        <span class="out-dot" v-bind:class="{active: outs > 0}">&nbsp;</span>
        <span class="out-dot" v-bind:class="{active: outs > 1}">&nbsp;</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['outs'])
}

</script>

<style lang="scss">
    .outs-wrapper {
        white-space: nowrap;
    }
    .out-dot {
        display: inline-block;
        width: 15px;
        height: 15px;
        vertical-align: middle;
        border: 1px solid #fff;
        border-radius: 50px;
        margin-left: 5px;
        &.active {
            background-color: red;
            animation: out-dot-animation 1s;
        }
    }

    @keyframes out-dot-animation {
        0% {background-color: transparent;}
        20% {background-color: white;}
        100% {background-color:red;}
    }
</style>
