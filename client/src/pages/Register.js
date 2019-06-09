import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { name, email, password, confirmPassword } = this.state        
        this.props.register({
            name,
            email,
            password,
            confirmPassword
        }, this.props.history)
    }

    render() {
        let { name, email, password, confirmPassword, error } = this.state


        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Register Here</h1>
                    <hr/>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text"
                            placeholder="Enter Your Name" 
                            className={error.name ? 'form-control is-invalid': 'form-control'}
                            name="name"
                            id="name"
                            value={name}
                            onChange={ this.changeHandler }
                            />
                            { error.name ? <div className="invalid-feedback">
                                {error.name}
                            </div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email"
                            placeholder="Enter Your Email" 
                            className={error.email ? 'form-control is-invalid': 'form-control'}
                            name="email"
                            id="email"
                            value={email}
                            onChange={ this.changeHandler }
                            />
                            { error.email ? <div className="invalid-feedback">
                                {error.email}
                            </div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password"
                            placeholder="Enter Your Password" 
                            className={error.password ? 'form-control is-invalid': 'form-control'}
                            name="password"
                            id="password"
                            value={password}
                            onChange={ this.changeHandler }
                            />
                            { error.password ? <div className="invalid-feedback">
                                {error.password}
                            </div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input type="password"
                            placeholder="Enter Your Password Again" 
                            className={error.confirmPassword ? 'form-control is-invalid': 'form-control'}
                            name="confirmPassword"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={ this.changeHandler }
                            />
                            { error.confirmPassword ? <div className="invalid-feedback">
                                {error.confirmPassword}
                            </div> : null}
                        </div>
                        <Link to='/login'>Already have account? Login here </Link><br/><br/>
                        <button className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {register})(Register)
