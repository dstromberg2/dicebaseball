import Vue from 'vue'
import { getRosters } from './names'

export const mutations = {
    setActive(state, active) {
        state.active = active
    },
    setInning(state, pos) {
        Vue.set(state.inning, 'number', pos.number)
        Vue.set(state.inning, 'half', pos.half)
    },
    setHighestInning(state, number) {
        state.highestInning = number
    },
    setDice(state, dice) {
        Vue.set(state.dice, 0, dice[0])
        Vue.set(state.dice, 1, dice[1])
    },
    setOuts(state, num) {
        Vue.set(state.inning, 'outs', num)
    },
    setRosterPosition(state, pos) {
        Vue.set(state.teams[pos.team], 'rosterPosition', pos.position)
    },
    setBatterAction(state, batter) {
        state.teams[batter.team].roster[batter.position].actions.push(batter.action)
    },
    setBatterStep(state, batter) {
        state.teams[batter.team].roster[batter.position].actions[batter.actionIndex].steps.push(batter.step)
    },
    setBatterRbi(state, batter) {
        Vue.set(state.teams[batter.team].roster[batter.position].actions[batter.actionIndex], 'rbi', batter.rbi)
    },
    resetRosters(state) {
        let rosters = getRosters()
        Vue.set(state.teams[0], 'roster', rosters[0])
        Vue.set(state.teams[1], 'roster', rosters[1])
    }
}
