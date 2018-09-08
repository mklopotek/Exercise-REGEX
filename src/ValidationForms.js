import React from 'react';

class ValidationForms extends React.Component {

    validationTest = (event) => {
        let value = new String(event.target.value);
        let fieldType = event.target.name;

        switch(fieldType){
            case 'username':

            case 'email':
            
            case 'password':

            case 'telephone':

        }

    };

    render() {
        const usernameReg = new RegExp('^[/w]{5,12}$', 'gi');
        const emailReg = /^(\w)+@(\w)+.[a-z]{2,3}$/gi;
        const passwordReg = /^[a-z0-9]{8,20}$/gi;
        const telephoneReg = /^\+48 [1-9][0-9]{2} [0-9]{3} [0-9]{3}$/g;

        return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="text" name="username" placeholder="username" onChange={this.validationTest} />
                <p>Username must be  and contain 5 - 12 characters</p>

                <input type="text" name="email" placeholder="email" />
                <p>Email must be a valid address, e.g. me@mydomain.com</p>

                <input type="text" name="password" placeholder="password" />
                <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

                <input type="text" name="telephone" placeholder="telephone" />
                <p>Telephone must be a valid PL telephone number (11 digits) like this: +48 111 111 111</p>

            </form>
        </div>
    )};
};

export default ValidationForms;