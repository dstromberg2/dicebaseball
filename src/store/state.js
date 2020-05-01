import { getRosters } from './names'

let rosters = getRosters()

export const state = {
    active: true,
    highestInning: 9,
    inning: {
        number: 0,
        half: 0,
        outs: 0
    },
    teams: [
        {
            name: 'Visitor',
            rosterPosition: 0,
            roster: rosters[0]
        },
        {
            name: 'Home',
            rosterPosition: 0,
            roster: rosters[1]
        }
    ],
    dice: [null, null]
}
