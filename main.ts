let sum = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 100; index++) {
        sum = sum + index
        basic.showNumber(sum)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
})
