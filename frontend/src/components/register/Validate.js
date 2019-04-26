import React, { Component } from 'react'
class Validate extends Component {

    constructor() {
        super();
        this.userAPIURL = 'http://localhost:8000/api/users/check_email/'
    }

    componentDidMount = () => {
        //Returns true if email already exist
            const email = this.props.state.email;
            fetch(this.userAPIURL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": email
                    })
                })
                .then((res) => res.json())
                //This returns a value, but I need to figure out how to access outside of scope
                .then((data) => console.log(data["email_exists"]))
        }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Validate;