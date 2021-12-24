const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require ('redux-thunk').default
const axios = require ('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//action တွေက type: ဆိုပြီး ခေါင်းစဥ်နဲ့ ကြားခံ value သိမ်းပေးတဲ့ variable လို နေရာသပ်သပ်
//api data fetch -> dispatch ဆိုပြီး  action func: ကို ခေါ် value ထည့်ပေးလိုက်
//-> 
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action )=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE: 
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default : return state
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //responese.data is users array
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //errro.message is the description
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())