enum RadioMessage {
    message1 = 49434,
    Device_ID = 52974
}
datalogger.onLogFull(function () {
    basic.showString("EF")
})
function Generate_Hash () {
    Block_Hash = Math.round(randint(6588, 8973) * (randint(8, 6587) / randint(6.9, 420)))
    Block_Hash_Array.push(Block_Hash)
    datalogger.log(datalogger.createCV("Block_Hash", "" + Block_Hash + "," + ID))
    serial.writeLine("" + Block_Hash + "," + ID)
}
input.onButtonPressed(Button.A, function () {
    Generate_Hash()
})
function Wallet_Amount () {
    Wallet = datalogger.createCV("Block_Hash", Value)
    if (Block_Hash_Array.split("_") == "") {
    	
    }
    Value += 1
}
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    serial.writeLine("Hi!")
})
let Value = 0
let Wallet: datalogger.ColumnValue = null
let Block_Hash_Array: number[] = []
let Block_Hash = 0
let ID = 0
led.stopAnimation()
basic.clearScreen()
radio.setGroup(58)
radio.setTransmitPower(7)
serial.redirectToUSB()
let Blocks = 0
let Block_Reward = 10
ID = 6
timeanddate.set24HourTime(12, 0, 0)
datalogger.setColumnTitles("Block_Hash")
datalogger.mirrorToSerial(false)
serial.writeLine("Online")
basic.forever(function () {
	
})
