

//% weight=100 color=#0fbc11 icon="\uf0b2"
namespace LiquidLevel {

    //% block="pin %pin liquid level reached a certain height？"
    export function isLiquid(pin: DigitalPin): number {
        pins.setPull(pin, PinPullMode.PullUp)
        return pins.digitalReadPin(pin)
    }

}
