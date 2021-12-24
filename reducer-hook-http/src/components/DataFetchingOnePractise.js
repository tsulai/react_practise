import axios from 'axios';
import React,{useState, useEffect} from 'react';

function DataFetchingOnePractise(props) {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError]= useState('')

    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        } )
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something went Wrong!')
        })
    },[])

    return (
        <div>
            {loading ? 'Loading ...' : post.title}
            {error ? error : null }
        </div>
    );
}

export default DataFetchingOnePractise;