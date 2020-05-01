<template>
    <div class="card">
        <div class="card-header" @click="toggle">
            Box Score
        </div>
        <div class="card-body" v-if="isOpen">
            <div class="btn-group">
                <button class="btn btn-secondary" v-bind:class="{'btn-dark': team === 0}" @click="setTeam(0)">
                    {{ teamName(0) }}
                </button>
                <button class="btn btn-secondary" v-bind:class="{'btn-dark': team === 1}" @click="setTeam(1)">
                    {{ teamName(1) }}
                </button>
            </div>
            <team-box-score v-bind:team="0" v-if="team == 0"></team-box-score>
            <team-box-score v-bind:team="1" v-if="team == 1"></team-box-score>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamBoxScore from './TeamBoxScore.vue'

export default {
    components: { TeamBoxScore },
    data() {
        return {
            isOpen: false,
            team: 0
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        },
        setTeam(t) {
            this.team = t
        }
    },
    computed: mapGetters(['inningHalf', 'teamName']),
    mounted() {
        this.team = this.inningHalf
    },
    watch: {
        inningHalf: function(newVal, oldVal) {
            this.team = newVal
        }
    }
}
</script>

<style lang="scss">

</style>
