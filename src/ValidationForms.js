import React from 'react';
import PaperRefined from './GlobalComponents/PaperRefined'

const usernameReg = new RegExp('^[a-z0-9]{5,12}$', 'i');
const emailReg = /^[a-z0-9\.-_]+@[a-z0-9\.-_]+\.[a-z]{2,4}$/;
const passwordReg = /^[\d\w@-]{8,20}$/i;
const telephoneReg = /^\+48 [1-9][0-9]{2} [0-9]{3} [0-9]{3}$/i;

class ValidationForms extends React.Component {
    constructor() {
        super();
        this.state = {
            isUserNameCorrect: null,
            isEmailCorrect: null,
            isPasswordCorrect: null,
            isTelephoneCorrect: null
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
                return value === '' ? this.setState({ isEmailCorrect: null }) :
                    value.match(emailReg) ? this.setState({ isEmailCorrect: true }) : this.setState({ isEmailCorrect: false })

            case 'password':
                return value === '' ? this.setState({ isPasswordCorrect: null }) :
                    value.match(passwordReg) ? this.setState({ isPasswordCorrect: true }) : this.setState({ isPasswordCorrect: false })

            case 'telephone':
                return value === '' ? this.setState({ isTelephoneCorrect: null }) :
                    value.match(telephoneReg) ? this.setState({ isTelephoneCorrect: true }) : this.setState({ isTelephoneCorrect: false })

            default:
                return
        }

    };

    onSumbitHandler(e){
console.log(e)

    };

    render() {

        const checkBorderColor = value => value === null ? null : value ? 'green' : 'orange'

        return (
            <PaperRefined>
                <h1>Sign Up Form</h1>
                <form>
                    <input type="text" name="username" placeholder="username" style={{ borderColor: checkBorderColor(this.state.isUserNameCorrect) }} onChange={this.validationTest} />
                    <p>Username must be  and contain 5 - 12 characters</p>

                    <input type="text" name="email" placeholder="email" style={{ borderColor: checkBorderColor(this.state.isEmailCorrect) }} onChange={this.validationTest} />
                    <p>Email must be a valid address, e.g. me@mydomain.com, uppercase are not allowed</p>

                    <input type="text" name="password" placeholder="password" style={{ borderColor: checkBorderColor(this.state.isPasswordCorrect) }} onChange={this.validationTest} />
                    <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

                    <input type="text" name="telephone" placeholder="telephone" style={{ borderColor: checkBorderColor(this.state.isTelephoneCorrect) }} onChange={this.validationTest} />
                    <p>Telephone must be a valid PL telephone number (11 digits) like this: +48 111 111 111</p>
                    <input type="submit" value="Sign Up" onSubmit={this.onSumbitHandler}/>
                </form>
            </PaperRefined>
        )
    };
};

export default ValidationForms;