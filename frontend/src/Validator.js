/*Validate length for now, make sure there are no null values
Next step is to validate email and password
Regex to ensure email is email
Password length to ensure password is at least 8 characters

Next step after that is live validation to improve user experience
*/
import React from 'react';
import FlashedMessages from './FlashedMessages';

export default class Validator {

    constructor(flashClass) {
        this.flashClass = flashClass
    }

    validateLength = (value, minLength) => {
        return value.toString().length > minLength 
    }

    validateEachLength = (values, rule=0, flashClass=this.flashClass, message="Please fill in all fields") => {

        let flashedMessages = [];

        values.forEach((value) => {
            if (!this.validateLength(value, rule)) {
                flashedMessages.push(<FlashedMessages flashClass={flashClass} text={message} />)
            }
        })

        return flashedMessages;
    }
}