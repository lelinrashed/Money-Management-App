import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    state = {
        email: '',
        password: '',
        error: {}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        let { email, password, error } = this.state

        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Login Here</h1>
                    <hr/>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email"
                            placeholder="Enter Your Email" 
                            className="form-control"
                            name="email"
                            id="email"
                            value={email}
                            onChange={ this.changeHandler }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password"
                            placeholder="Enter Your Password" 
                            className="form-control"
                            name="password"
                            id="password"
                            value={password}
                            onChange={ this.changeHandler }
                            />
                        </div>
                        <Link to='/register'>Don't have account? Register here </Link><br/><br/>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
