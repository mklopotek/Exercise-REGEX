import React from 'react'

const styles = {
    textAlign: 'center',
    margin: '40px',
}

const ValidationForms = (props) => (
    <div
        style={styles}
    >
        <h1>New User Sign Up</h1>
        <form>

            <input type="text" name="username" placeholder="username" />
            <p>Username must be  and contain 5 - 12 characters</p>

            <input type="text" name="email" placeholder="email" />
            <p>Email must be a valid address, e.g. me@mydomain.com</p>

            <input type="password" name="password" placeholder="password" />
            <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

            <input type="text" name="telephone" placeholder="telephone" />
            <p>Telephone must be a valid PL telephone number (11 digits)</p>

            <input type="text" name="slug" placeholder="user login" />
            <p>Login must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters</p>

        </form>
    </div>
)

export default ValidationForms