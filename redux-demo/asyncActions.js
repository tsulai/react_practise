const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware //thunk မထည့်ခင် အရင်ပြောထားရ
const thunkMiddleware = require ('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
//action တွေက type: ဆိုပြီး ခေါင်းစဥ်နဲ့ ကြားခံ value သိမ်းပေးတဲ့ variable လို အရာ
//api data fetch -> dispatch ဆိုပြီး  action func: ကို ခေါ် value ထည့်ပေးလိုက်
//-> 
const fetchUsersSuccess = users => {//* ခေါ်တဲ့ နေရာက pass မယ့် users argument ပါတယ်
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {//* error argument ပါတယ်
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
// Note: Reducer သည် action func: ကိုခေါ်တာမဟုတ်
// action ထဲက type ခေါင်းစဥ် လေးကိုပဲ ဒီခေါင်းစဥ်လာရင် ဒီ state ထဲမှာ ဘာထည့်မယ်ပြောတဲ့ နေရာ
const reducer = (state = initialState, action ) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: //action နာမည် const လေးကိုပဲ သုံးတာ
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload, //value ကတော့ action ကနေ ပါလာတဲ့ value ကို state ထဲကိုထည့်မှာ
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

//action creator - return action But, with thunk middleware
//the ability of the action creator to return the function instead of action object
//ပုံမှန် action creator func: က action obj ကို return ပြန်ပေမယ့် thunk middleware သုံးထားတဲ့အတွက်
//function အနေနဲ့ return ပြန်မယ်။ အဲဒီ func:က side effect တွေလုပ်လို့ရမယ် such as asyn data call 
//function က also can dispatch regular action which will be handle by reducer
const fetchUsers = () => {
    return function (dispatch) {//it not have to be pure, its allowed side effect such as async api call
        dispatch(fetchUsersRequest())//set loading true - by reducer
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data is the array of users
            const users = response.data.map(user => user.id)//for each user return user.id 
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message is the description of the error
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
//store ကနေ main dispatch လုပ်ချလိုက်မယ်။
store.dispatch(fetchUsers())