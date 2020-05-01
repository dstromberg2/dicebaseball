<template>
    <div class="field">
        <div class="background">
            <img class="img-fluid" src="/assets/field.png" />
        </div>
        <div v-for="player in currentRoster">
            <fieldPlayer v-bind:player="player"></fieldPlayer>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FieldPlayer from './FieldPlayer.vue'

export default {
    components: { FieldPlayer },
    computed: mapGetters(['currentRoster', 'inningNumber'])
}

</script>

<style lang="scss">
    .field {
        position: relative;
    }
</style>
