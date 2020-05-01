export function rollDice() {
    const roll = [
        Math.floor(Math.random() * Math.floor(6)),
        Math.floor(Math.random() * Math.floor(6))
    ]
    if (roll[0] < roll[1]) {
        return roll
    } else {
        return roll.reverse()
    }
}
