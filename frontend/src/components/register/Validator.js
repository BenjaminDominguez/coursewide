
export default class Validator {
    constructor() {
    }

    validateLength = (value, minLength) => {
        return value.toString().length > minLength 
    }
}