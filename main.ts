let value = ""
serial.onDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    value = serial.readString()
    if (value == "A.") {
        basic.showIcon(IconNames.Heart)
    }
    if (value == "B.") {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    basic.pause(100)
    serial.writeNumber(Math.round(input.magneticForce(Dimension.Strength)) + 0)
    serial.writeString(", ")
    serial.writeNumber(Math.round(input.rotation(Rotation.Roll)) + 180)
    serial.writeString(String.fromCharCode(10))
})
