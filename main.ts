radio.setGroup(1)
let speed = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 512) {
        radio.sendNumber(0)
    } else if (pins.analogReadPin(AnalogPin.P0) > 512) {
        radio.sendNumber(1)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 512) {
        radio.sendNumber(2)
    } else if (pins.analogReadPin(AnalogPin.P1) > 512) {
        radio.sendNumber(3)
    }
})
