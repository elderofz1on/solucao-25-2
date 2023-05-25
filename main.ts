input.onButtonPressed(Button.A, function () {
    stop = true
    basic.showNumber(posicao)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    stop = false
})
let stop = false
let posicao = 0
let strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
posicao = 0
stop = false
strip.setBrightness(127)
basic.forever(function () {
    for (let índice = 0; índice <= 11; índice++) {
        if (stop) {
            break;
        }
        posicao = índice
        strip.setPixelColor(índice, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 100, 500))
        strip.clear()
    }
})
