import { ADD, SQUARE, GET_DATA } from './actionType'

const Add = (id) => {
    // return {
    //     type: ADD,
    //     actions: id
    // }
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: ADD
            })
        }, 2000)
    }
}

const getSquare = (id) => {
    return {
        type: SQUARE
    }
}

const get_user = () => {
    return dispatch => {
        fetch('https://randomuser.me/api/').then(res => {
            res.json().then(re => {
                //  console.log(re.results[0])
                dispatch(fetch_user(re.results[0]))
            })
        })
    }
}

const fetch_user = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        user
    }
}

export {
    Add,
    getSquare,
    get_user,
    fetch_user
}