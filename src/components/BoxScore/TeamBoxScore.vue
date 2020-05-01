<template>
    <table class="boxscore table table-striped table-sm">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>AB</th>
                <th>R</th>
                <th>H</th>
                <th>RBI</th>
                <th>BB</th>
                <th>K</th>
                <th>AVG</th>
            </tr>
        </thead>
        <tbody>
            <player-box-score
                v-for="(player, i) in teamRoster(team)"
                v-bind:player="player"
                v-bind:team="team"
                v-bind:position="i"
            ></player-box-score>
            <player-box-score
                v-bind:player="{name: 'Totals'}"
                v-bind:team="team"
                position="totals"
            ></player-box-score>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'
import PlayerBoxScore from './PlayerBoxScore.vue'

export default {
    components: { PlayerBoxScore },
    props: ['team'],
    computed: mapGetters(['teamRoster'])
}

</script>

<style lang="scss">
    .boxscore {
        text-align: center;
    }
</style>
