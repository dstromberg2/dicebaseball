import { rollActions } from './rollActions'
import { rollDice } from './rollDice'

export const actions = {
    roll(context) {
        if (!context.getters.active) return
        context.commit('setDice', rollDice())
        context.dispatch('addBatterAction')
        rollActions(context)
    },
    reset({commit}) {
        commit('resetRosters')
        commit('setOuts', 0)
        commit('setInning', {
            number: 0,
            half: 0
        })
        commit('setRosterPosition', {
            team: 0,
            position: 0
        })
        commit('setRosterPosition', {
            team: 1,
            position: 0
        })
        commit('setHighestInning', 9)
        commit('setDice', [null, null])
        commit('setActive', true)
    },
    addBatterAction({commit, getters}) {
        commit('setBatterAction', {
            team: getters.inningHalf,
            position: getters.rosterPosition,
            action: {...getters.rollAction, inning: getters.inningNumber, rbi: 0, steps: []}
        })
    },
    addBatterStep({commit, getters}, batter) {
        commit('setBatterStep', {
            ...batter,
            actionIndex: getters.currentRoster[batter.position].actions.length - 1,
            team: getters.inningHalf
        })
    },
    addBatterRbi({commit, getters}) {
        commit('setBatterRbi', {
            team: getters.inningHalf,
            position: getters.rosterPosition,
            actionIndex: getters.currentBatter.actions.length - 1,
            rbi: getters.currentBatter.actions[getters.currentBatter.actions.length - 1].rbi + 1
        })
    },
    finishBatter({commit, getters, dispatch}) {
        commit('setRosterPosition', {
            team: getters.inningHalf,
            position: (getters.rosterPosition === 8 ? 0 : getters.rosterPosition + 1)
        })
        if (getters.outs >= 3) {
            dispatch('inningChange')
        }
    },
    addOuts({commit, getters}, num) {
        commit('setOuts', getters.outs + num)
    },
    inningChange({commit, getters, dispatch}) {
        commit('setOuts', 0)
        if (getters.hasBase('first')) {
            dispatch('addBatterStep', {
                position: getters.getBase('first').index,
                step: 'lob'
            })
        }
        if (getters.hasBase('third')) {
            dispatch('addBatterStep', {
                position: getters.getBase('third').index,
                step: 'lob'
            })
        }
        if (getters.hasBase('second')) {
            dispatch('addBatterStep', {
                position: getters.getBase('second').index,
                step: 'lob'
            })
        }
        if (getters.inningHalf === 1) {
            if (getters.inningNumber >= getters.highestInning - 1) {
                if (getters.totalScore(1) === getters.totalScore(0)) {
                    commit('setHighestInning', getters.highestInning + 1)
                    commit('setInning', {
                        number: getters.inningNumber + 1,
                        half: 0
                    })
                } else {
                    dispatch('endGame')
                }
            } else {
                commit('setInning', {
                    number: getters.inningNumber + 1,
                    half: 0
                })
            }
        } else {
            if (getters.inningNumber >= getters.highestInning - 1 && getters.totalScore(1) > getters.totalScore(0)) {
                dispatch('endGame')
            } else {
                commit('setInning', {
                    number: getters.inningNumber,
                    half: 1
                })
            }
        }
    },
    endGame({commit}) {
        commit('setActive', false)
    }
}
