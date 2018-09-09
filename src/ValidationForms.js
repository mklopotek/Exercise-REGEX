import React from 'react';

const usernameReg = new RegExp('^[a-z0-9]{5,12}$', 'i');
const emailReg = /^[a-z0-9\.-_]+@[a-z0-9\.-_]+\.[a-z]{2,4}$/;
const passwordReg = /^[\d\w@-]{8,20}$/i;
const telephoneReg = /^\+48 [1-9][0-9]{2} [0-9]{3} [0-9]{3}$/i;

class ValidationForms extends React.Component {
    constructor() {
        super();
        this.state = {
            isUserNameCorrect: null,
            email: null,
            password: null,
            telephone: null
        }
    }

    validationTest = (event) => {
        let value = (event.target.value);
        let fieldType = event.target.name;

        switch (fieldType) {
            case 'username':
                return value === '' ? this.setState({ isUserNameCorrect: null }) :
                    value.match(usernameReg) ? this.setState({ isUserNameCorrect: true }) : this.setState({ isUserNameCorrect: false })

            case 'email':
                return value === '' ? this.setState({ email: null }) :
                    value.match(emailReg) ? this.setState({ email: true }) : this.setState({ email: false })

            case 'password':
                return value === '' ? this.setState({ password: null }) :
                    value.match(passwordReg) ? this.setState({ password: true }) : this.setState({ password: false })

            case 'telephone':
                return value === '' ? this.setState({ telephone: null }) :
                    value.match(telephoneReg) ? this.setState({ telephone: true }) : this.setState({ telephone: false })

            default:
                return
        }

    };

    render() {
        
        const checkBorderColor = value => value === null ? null : value ? 'green' : 'orange'

        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input type="text" name="username" placeholder="username" style={{ borderColor: checkBorderColor(this.state.isUserNameCorrect) }} onChange={this.validationTest} />
                    <p>Username must be  and contain 5 - 12 characters</p>
                    
                    <input type="text" name="email" placeholder="email" style={{ borderColor: checkBorderColor(this.state.email) }} onChange={this.validationTest} />
                    <p>Email must be a valid address, e.g. me@mydomain.com, uppercase are not allowed</p>

                    <input type="text" name="password" placeholder="password" style={{ borderColor: checkBorderColor(this.state.password) }} onChange={this.validationTest} />
                    <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

                    <input type="text" name="telephone" placeholder="telephone" style={{ borderColor: checkBorderColor(this.state.telephone) }} onChange={this.validationTest} />
                    <p>Telephone must be a valid PL telephone number (11 digits) like this: +48 111 111 111</p>

                </form>
            </div>
        )
    };
};

export default ValidationForms;