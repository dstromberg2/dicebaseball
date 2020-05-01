import { rollMap } from './rollMap'

function recentStep(x) {
    return (
        x.actions.length > 0 && x.actions[x.actions.length - 1].steps.length > 0
        ? x.actions[x.actions.length - 1].steps[x.actions[x.actions.length - 1].steps.length - 1]
        : null
    )
}

export const getters = {
    active: (state) => {
        return state.active
    },
    highestInning: (state) => {
        return state.highestInning
    },
    inningMap: (state, getters) => {
        return Array(getters.highestInning).fill().map((x, i) => i + 1)
    },
    inningNumber: (state) => {
        return state.inning.number
    },
    inningHalf: (state) => {
        return state.inning.half
    },
    outs: (state) => {
        return state.inning.outs
    },
    dice: (state) => {
        return state.dice
    },
    rollAction: (state, getters) => {
        return rollMap[getters.dice[0]][getters.dice[1]]
    },
    teams: (state) => {
        return state.teams
    },
    team: (state, getters) => (team) => {
        return getters.teams[team]
    },
    teamName: (state, getters) => (team) => {
        return getters.teams[team].name
    },
    teamRoster: (state, getters) => (team) => {
        return getters.team(team).roster
    },
    currentTeam: (state, getters) => {
        return state.teams[getters.inningHalf]
    },
    rosterPosition: (state, getters) => {
        return getters.currentTeam.rosterPosition
    },
    currentRoster: (state, getters) => {
        return getters.currentTeam.roster
    },
    currentBatter: (state, getters) => {
        return getters.currentRoster[getters.rosterPosition]
    },
    hasBase: (state, getters) => (base) => {
        return getters.currentRoster.some(x => recentStep(x) == base)
    },
    getBase: (state, getters) => (base) => {
        return {
            index: getters.currentRoster.findIndex(x => recentStep(x) == base),
            player: getters.currentRoster.find(x => recentStep(x) == base)
        }
    },
    inningScore: (state, getters) => (inningNumber, team) => {
        return getters.teams[team].roster.reduce((acc, x) => {
            return acc + x.actions.filter(
                x2 => x2.inning === inningNumber - 1
            ).filter(
                x3 => x3.steps.filter(y => y === 'run').length > 0
            ).length
        }, 0)
    },
    totalScore: (state, getters) => (team) => {
        let total = 0
        for (let i = 1; i <= getters.highestInning; i++) {
            total += getters.inningScore(i, team)
        }
        return total
    },
    playerStats: (state, getters) => (team, player) => {
        return {
            ab: getters.teamRoster(team)[player].actions.filter(
                x => ['walk', 'sacrifice'].indexOf(x.type) < 0
            ).length,
            r: getters.teamRoster(team)[player].actions.filter(
                x => {
                    return x.steps.filter(y => y === 'run').length > 0
                }
            ).length,
            h: getters.teamRoster(team)[player].actions.filter(
                x => ['single', 'double', 'triple', 'run'].indexOf(x.type) >= 0
            ).length,
            rbi: getters.teamRoster(team)[player].actions.reduce((acc, x) => acc + x.rbi, 0),
            bb: getters.teamRoster(team)[player].actions.filter(
                x => x.type === 'walk'
            ).length,
            k: getters.teamRoster(team)[player].actions.filter(
                x => x.type === 'strikeout'
            ).length
        }
    },
    teamStats: (state, getters) => (team) => {
        return getters.teamRoster(team).reduce((acc, x, i) => {
            acc.ab += getters.playerStats(team, i).ab
            acc.r += getters.playerStats(team, i).r
            acc.h += getters.playerStats(team, i).h
            acc.rbi += getters.playerStats(team, i).rbi
            acc.bb += getters.playerStats(team, i).bb
            acc.k += getters.playerStats(team, i).k
            return acc
        }, {ab: 0, r: 0, h: 0, rbi: 0, bb: 0, k: 0})
    }
}
