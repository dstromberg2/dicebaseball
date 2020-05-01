<template>
    <div class="dice" v-bind:class="dieVal">
        <span class="dot dot1">&nbsp;</span>
        <span class="dot dot2">&nbsp;</span>
        <span class="dot dot3">&nbsp;</span>
        <span class="dot dot4">&nbsp;</span>
        <span class="dot dot5">&nbsp;</span>
        <span class="dot dot6">&nbsp;</span>
        <span class="dot dot7">&nbsp;</span>
    </div>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        dieVal() {
            switch(parseInt(this.value)) {
                case 0:
                    return 'one'
                    break;
                case 1:
                    return 'two'
                    break;
                case 2:
                    return 'three'
                    break;
                case 3:
                    return 'four'
                    break;
                case 4:
                    return 'five'
                    break;
                case 5:
                    return 'six'
                    break;

            }
        }
    }
}
</script>

<style lang="scss">
    .dice {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 2px solid #000;
        border-radius: 10px;
        vertical-align: middle;

        .dot {
            position: absolute;
            display: none;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #000;
            &.dot1 {
                top: 4px;
                left: 4px;
            }
            &.dot2 {
                top: 4px;
                right: 4px;
            }
            &.dot3 {
                bottom: 4px;
                right: 4px;
            }
            &.dot4 {
                bottom: 4px;
                left: 4px;
            }
            &.dot5 {
                top: 18px;
                left: 18px;
            }
            &.dot6 {
                top: 18px;
                left: 4px;
            }
            &.dot7 {
                top: 18px;
                right: 4px;
            }
        }
        &.one {
            .dot5 { display: block; }
        }

        &.two {
            .dot1, .dot3 { display: block; }
        }

        &.three {
            .dot2, .dot4, .dot5 { display: block; }
        }

        &.four {
            .dot1, .dot2, .dot3, .dot4 { display: block; }
        }

        &.five {
            .dot1, .dot2, .dot3, .dot4, .dot5 { display: block; }
        }

        &.six {
            .dot1, .dot2, .dot3, .dot4, .dot6, .dot7 { display: block; }
        }

    }
</style>
