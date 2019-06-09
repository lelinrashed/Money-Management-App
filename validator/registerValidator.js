const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.name) {
        error.name = 'Please Provide Your Name'
    }

    if (!user.email) {
        error.email = 'Please Provide your Email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please Provide a Valid Email'
    }

    if (!user.password) {
        error.password = 'Please Provide a Password'
    } else if (user.password.length < 6) {
        error.password = 'Password must be getter than 6 character'
    }

    if (!user.confirmPassword) {
        error.confirmPassword = 'Plase Provide Confirmation Password'
    } else if (user.password !== user.confirmPassword) {
        error.confirmPassword = 'Password does not Match'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate