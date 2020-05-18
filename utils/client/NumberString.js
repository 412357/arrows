import stringToInt from "./stringToInt"

export default class NumberString {
    constructor(value) {
        this.value
    }

    asInteger() {
        if( typeof this.asInteger === 'undefined' ) {
            this.asInteger = stringToInt(this.value)
        }
        return this.asInteger
    }

}