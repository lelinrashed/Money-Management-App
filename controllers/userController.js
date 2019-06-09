const registerValidator = require('../validator/registerValidator')

// Login controller
module.exports = {
    login(req, res) {
        let name = req.body.name
        let email = req.body.email
        res.json({
            message: `Welcome ${name}, we will contact with you by $`
        })
    },
    register(req, res) {
        let { name, email, password, confirmPassword } = req.body
        let validate = registerValidator({
            name, email, password, confirmPassword
        })
        if (!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            res.status(200).json({
                message: 'Everything is ok'
            })
        }
    }
}
