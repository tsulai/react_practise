import React, {useReducer, useEffect} from 'react';
import axios from 'axios'
//2
const initialState = {
    loading: true,
    post: {},
    error: ''
}
//3
const reducer = (state, action) =>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong!'
            }
        default: 
            return state
    }
}


function DataFetchingTwo(props) {
    
    // 5,1
    const [state, dispatch] = useReducer(reducer, initialState)

    //4
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(//state ပြောင်းတဲ့ ၂ နေရာက .then နဲ့ .catch နဲ့ ကို reducer ကို manage လုပ်ခိုင်းလိုက်တာ
            response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            }
        )
        .catch(error => {
            dispatch ({type: 'FETCH_ERROR'})
        })
    },[])
    //6
    return (
        <div>
            {state.loading ? 'Loading ...' : state.post.title}
            {state.error? state.error : null}
        </div>
    );
}

export default DataFetchingTwo;