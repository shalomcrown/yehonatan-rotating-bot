let מרחק_חפצ_הכי_רחוק = 0
let זווית_גלאי = 0
let זווית_חפץ_הכי_רחוק = 0
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P9, DigitalPin.P8)
basic.forever(function () {
    זווית_חפץ_הכי_רחוק = 0
    זווית_גלאי = 0
    מרחק_חפצ_הכי_רחוק = 0
    for (let _אינדקס = 0; _אינדקס <= 12; _אינדקס++) {
        basic.pause(100)
        זווית_גלאי = _אינדקס * 20
        SuperBit.Servo2(SuperBit.enServo.S4, זווית_גלאי)
        if (makerbit.getUltrasonicDistance(DistanceUnit.CM) > זווית_חפץ_הכי_רחוק) {
            מרחק_חפצ_הכי_רחוק = makerbit.getUltrasonicDistance(DistanceUnit.CM)
            זווית_חפץ_הכי_רחוק = זווית_גלאי
        }
    }
    basic.showNumber(זווית_חפץ_הכי_רחוק)
    SuperBit.Servo2(SuperBit.enServo.S4, 90)
    if (זווית_חפץ_הכי_רחוק < 90) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 100)
        basic.pause(500)
    } else {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -100)
        basic.pause(500)
    }
    SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
    basic.pause(500)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    100,
    SuperBit.enMotors.M4,
    100
    )
    basic.pause(1000)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    0,
    SuperBit.enMotors.M4,
    0
    )
})
