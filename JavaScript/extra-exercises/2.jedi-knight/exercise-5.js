const rollDice = (faces = 6) => {
    const diceFace = parseInt(Math.random() * (faces + 1))
    return `Face ${diceFace} of the die has come up`
}

console.log(rollDice(5))