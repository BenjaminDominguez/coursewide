/*Validate length for now, make sure there are no null values
Next step is to validate email and password
Regex to ensure email is email
Password length to ensure password is at least 8 characters

Next step after that is live validation to improve user experience
*/


export default class Validator {
    constructor() {
    }

    validateLength = (value, minLength) => {
        return value.toString().length > minLength 
    }
}