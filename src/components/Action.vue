<template>
    <div class="actions my-3">
        <div class="row align-items-center">
            <div class="col-lg-3 col-2 order-2 order-lg-1 text-center">
                <dice v-bind:value="dice[0]"></dice>
            </div>
            <div class="col-lg-3 col-2 order-3 order-lg-2 text-center">
                <dice v-bind:value="dice[1]"></dice>
            </div>
            <div class="col-lg-6 col-4 order-4 order-lg-3 text-right">
                <button @click="roll()" :disabled="!active" class="btn btn-info">Roll</button>
            </div>
            <div class="col-lg-6 col-4 order-1 order-lg-4 text-center my-lg-3">
                <span v-if="dice[0] !== null && dice[1] !== null">
                    {{ rollAction.label }}
                </span>
            </div>
        </div>
        <div class="row mt-3 mt-lg-0">
            <div class="col text-right">
                <button @click="reset()" class="btn btn-danger">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Dice from './Dice.vue'

export default {
    components: {Dice},
    computed: mapGetters(['active', 'dice', 'rollAction']),
    methods: mapActions(['roll', 'reset'])
}

</script>

<style lang="scss">

</style>
