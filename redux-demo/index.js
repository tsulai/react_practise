//this is for react application - es6 import
//import redux from 'redux' 

//for simple node js application - use require
//1.0. start redux
const redux = require('redux') 
//middleware 1
const reduxLogger = require('redux-logger')

const createStore = redux.createStore //init func: b4 call - later use as createStore(passSomethingHere)
const combinedReducers = redux.combineReducers //init func: b4 call

//middleware 3 - apply middleware - to include in redux
//redux မှာ middelware သုံးမယ်ဆို redux အနေနဲ့ ကြေငြာ .. middleware အနေနဲ့ ကြေငြာတာမဟုတ်
const applyMiddleware = redux.applyMiddleware

//middleware 2 - which middleware လဲ ကြေငြာ
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator - which return action
//action creator func: ထုတ်ထားတော့ changes ရှိရင် action ခေါ်တဲ့ နေရာတိုင်းလိုက်ပြင်စရာမလိုတော့
function buyCake() {
    return{
        type: BUY_CAKE,//action is the object with 'type' property
        info: 'First redux acton'
    }
}
function buyIcecream() {
    return{
        type: BUY_ICECREAM
    }
}
//(previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action )=>{
    switch(action.type){
        case BUY_CAKE : 
            return{
                ...state,//first make the copy of the state object then update the require state property
                numOfCakes : state.numOfCakes - 1
            }
        default: return state
    }
}

const iceCreamReducer = (state = initialIcecreamState, action )=>{
    switch(action.type){        
        case BUY_ICECREAM : 
            return{
                ...state,
                numOfIcecreams : state.numOfIcecreams - 1
            }
        default: return state
    }
}
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
//state ကို access လုပ်ချင်ရင် state.iceCream.numOfIcecream ဖြစ်မှာ

//middleware 4
//1. redux store holding the application state - store ထဲမှာ state ကို ထည့်လိုက်မယ်
const store = createStore(rootReducer, applyMiddleware(logger))//create Store accept reducer function as param

//2. access to state
console.log('initial state', store.getState())

//4. allow the app to subscribe to changes in the store
//const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
const unsubscribe = store.subscribe( () => {}) //logger middleware က Log တွေ manage လုပ်မှာမို့ console log ခေါ်စရာမလိုတော့
//3. the store provide dispatch method to update the state
store.dispatch(buyCake()) //accept action as param / can direct pass the action name 'BUY_CAKE'
store.dispatch(buyCake()) //action creator func: ထုတ်ထားတော့ changes ရှိရင် action ခေါ်တဲ့ နေရာတိုင်းလိုက်ပြင်စရာမလိုတော့
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

//5. unsubscribe from the store buy calling the functin return from subscribe method
unsubscribe ()
