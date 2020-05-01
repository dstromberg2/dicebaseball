export function rollActions({commit, getters, dispatch}) {
    switch(getters.rollAction.type) {
        case 'out':
        case 'strikeout':
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'out'
            })
            dispatch('addOuts', 1)
            dispatch('finishBatter')
            break;
        case 'doubleplay':
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'out'
            })
            dispatch('addOuts', 1)
            if (getters.hasBase('first')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'out'
                })
                dispatch('addOuts', 1)
            } else if (getters.hasBase('third')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('third').index,
                    step: 'out'
                })
                dispatch('addOuts', 1)
            } else if (getters.hasBase('second')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('second').index,
                    step: 'out'
                })
                dispatch('addOuts', 1)
            }
            dispatch('finishBatter')
            break;
        case 'sac':
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'out'
            })
            if (getters.outs < 2) {
                if (getters.hasBase('third')) {
                    dispatch('addBatterStep', {
                        position: getters.getBase('third').index,
                        step: 'run'
                    })
                    dispatch('addBatterRbi')
                }
                if (getters.hasBase('second')) {
                    dispatch('addBatterStep', {
                        position: getters.getBase('second').index,
                        step: 'third'
                    })
                }
                if (getters.hasBase('first')) {
                    dispatch('addBatterStep', {
                        position: getters.getBase('first').index,
                        step: 'second'
                    })
                }
            }
            dispatch('addOuts', 1)
            dispatch('finishBatter')
            break;
        case 'walk':
            if (getters.hasBase('first')) {
                if (getters.hasBase('second')) {
                    if (getters.hasBase('third')) {
                        dispatch('addBatterStep', {
                            position: getters.getBase('third').index,
                            step: 'run'
                        })
                        dispatch('addBatterRbi')
                    }
                    dispatch('addBatterStep', {
                        position: getters.getBase('second').index,
                        step: 'third'
                    })
                }
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'second'
                })
            }
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'first'
            })
            dispatch('finishBatter')
            break;
        case 'single':
            if (getters.hasBase('third')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('third').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('second')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('second').index,
                    step: 'third'
                })
            }
            if (getters.hasBase('first')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'second'
                })
            }
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'first'
            })
            dispatch('finishBatter')
            break;
        case 'double':
            if (getters.hasBase('third')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('third').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('second')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('second').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('first')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'third'
                })
            }
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'second'
            })
            dispatch('finishBatter')
            break;
        case 'triple':
            if (getters.hasBase('third')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('third').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('second')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('second').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('first')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'third'
            })
            dispatch('finishBatter')
            break;
        case 'run':
            if (getters.hasBase('third')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('third').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('second')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('second').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            if (getters.hasBase('first')) {
                dispatch('addBatterStep', {
                    position: getters.getBase('first').index,
                    step: 'run'
                })
                dispatch('addBatterRbi')
            }
            dispatch('addBatterStep', {
                position: getters.rosterPosition,
                step: 'run'
            })
            dispatch('addBatterRbi')
            dispatch('finishBatter')
            break;
        default:
            console.log(getters.rollAction)
            break;
    }
}
