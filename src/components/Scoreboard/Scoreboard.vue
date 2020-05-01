<template>
    <div class="row scoreboard-wrapper">
        <table class="scoreboard table table-bordered">
            <thead>
                <tr>
                    <th>Inning</th>
                    <th v-for="n in highestInning" class="text-center">
                        {{ n }}
                    </th>
                    <th>Runs</th>
                </tr>
            </thead>
            <tbody>
                <team-score team="0"></team-score>
                <team-score team="1"></team-score>
                <tr>
                    <td colspan="9">&nbsp;</td>
                    <td colspan="2">
                        <outs></outs>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Outs from './Outs.vue'
import TeamScore from './TeamScore.vue'

export default {
    components: { Outs, TeamScore },
    computed: mapGetters(['highestInning'])
}

</script>

<style lang="scss">
    .scoreboard-wrapper {
        overflow-x: auto;
    }
    .scoreboard {
        background-color: #153238;
        color: #fff;
    }
</style>
