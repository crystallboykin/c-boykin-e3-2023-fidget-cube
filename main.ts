input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
})
