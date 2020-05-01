<template>
    <div class="card">
        <div class="card-header" @click="toggle">
            Roll Guide
        </div>
        <div class="card-body" v-if="isOpen">
            <div v-for="(x, i) in rollMap">
                <div v-for="(y, j) in x" v-if="y !== null">
                    <dice v-bind:value="i"></dice>
                    <dice v-bind:value="j"></dice>
                    <span class="guide-label">
                        {{ y.label }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dice from './Dice.vue'
import { rollMap } from '../store/rollMap'

export default {
    data() {
        return {
            isOpen: false,
            rollMap: rollMap
        }
    },
    components: { Dice },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>
.card-header {
    cursor: pointer;
}
.guide-label {
    vertical-align: middle;
}
</style>
