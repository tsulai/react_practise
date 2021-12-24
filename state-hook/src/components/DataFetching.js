import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetching(props) {
    //const [posts, setPosts] = useState([])
    //one item OBJECT return ပြန်လာမှာ data array မဟုတ်တော့
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromButtonClick])

    return (
        <div>
            {/* controlled component - set the value, listen to the onChange event to assign the value back to the input element */ }
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                posts.length?
                posts.map(post => <li key={post.id}>{post.title}</li>)
                : null
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;