bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
    }
    basic.clearScreen()
})
for (let index = 0; index <= 4; index++) {
    basic.showNumber(5 - index)
    basic.pause(200)
}
basic.clearScreen()
basic.forever(function () {
	
})
