import React from 'react';

class ValidationForms extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            email: null,
            password: null,
            telephone: null
        }
    }

    validationTest = (event) => {
        const usernameReg = new RegExp('^[a-z]{5,12}$', 'i');
        const emailReg = /^(\w)+@(\w)+.[a-z]{2,3}$/gi;
        const passwordReg = /^[a-z0-9]{8,20}$/gi;
        const telephoneReg = /^\+48 [1-9][0-9]{2} [0-9]{3} [0-9]{3}$/g;

        let value = (event.target.value);

        let fieldType = event.target.name;

        switch (fieldType) {
            case 'username':
            value.match(usernameReg) ? this.setState({username: true}) : this.setState({username: false})

            case 'email':

            case 'password':

            case 'telephone':

        }

    };

    render() {
        const checkBorderColor = (value) => {
            return value !== null ?
                value ?
                    'green'
                    :
                    'orange'
                : null
        }

        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input type="text" name="username" placeholder="username" style={{ borderColor: checkBorderColor(this.state.username) }} onChange={this.validationTest} />
                    <p>Username must be  and contain 5 - 12 characters</p>

                    <input type="text" name="email" placeholder="email" />
                    <p>Email must be a valid address, e.g. me@mydomain.com</p>

                    <input type="text" name="password" placeholder="password" />
                    <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

                    <input type="text" name="telephone" placeholder="telephone" />
                    <p>Telephone must be a valid PL telephone number (11 digits) like this: +48 111 111 111</p>

                </form>
            </div>
        )
    };
};

export default ValidationForms;