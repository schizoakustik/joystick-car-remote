radio.onReceivedValue(function (name, value) {
    if (name == "dir") {
        servos.P2.setAngle(Math.map(value, 0, 1023, 0, 180))
    } else {
        pins.analogWritePin(AnalogPin.P4, value)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("dir", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("speed", pins.analogReadPin(AnalogPin.P0))
})
