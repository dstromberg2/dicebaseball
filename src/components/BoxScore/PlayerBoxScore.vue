<template>
    <tr class="player-box-score" v-bind:class="{'active': isActive}">
        <td class="text-right">{{ player.name }}</td>
        <td>{{ stats.ab }}</td>
        <td>{{ stats.r }}</td>
        <td>{{ stats.h }}</td>
        <td>{{ stats.rbi }}</td>
        <td>{{ stats.bb }}</td>
        <td>{{ stats.k }}</td>
        <td>{{ avg }}</td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['player', 'position', 'team'],
    computed: {
        isActive() {
            if (this.position === 'totals') return true
            return this.active && this.team === this.inningHalf && this.position === this.rosterPosition
        },
        avg() {
            if (this.stats.ab === 0) return (this.stats.h > 0 ? '1.000' : '.000')
            let num = Math.round(
                (this.stats.h / this.stats.ab) * 1000
            ) / 1000
            if (num == 1) {
                return '1.000'
            }
            if (num == 0) {
                return '.000'
            }
            return num.toString().substring(1).padEnd(4, 0)
        },
        stats() {
            if (this.position === 'totals') return this.teamStats(this.team)
            return this.playerStats(this.team, this.position)
        },
        ...mapGetters(['active', 'playerStats', 'teamStats', 'rosterPosition', 'inningHalf'])
    }
}

</script>

<style lang="scss">
    .player-box-score {
        &.active {
            font-weight: bold;
        }
    }
</style>
