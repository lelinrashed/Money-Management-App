import Axios from 'axios'
import * as Types from './types'

export const register = (user, history) => {
    return dispatch => {
        Axios.post('/api/users/register', user)
        .then(res => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: {}
                }
            })
            console.log(res)
            history.push('/login')
        })
        .catch(error => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
    }
}

export default register