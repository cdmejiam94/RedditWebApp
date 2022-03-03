import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Posts from './Posts';

const BestList = () => {
    let url = useLocation();

    const [postList, setPostList] = useState([])

    useEffect(() => {
        if(url.search.split("&").length > 1){
            const code = url.search.split("&")[1].split("=")[1];
            axios.get(`http://localhost:3003/reddit-api/v1/reddit-posts/${code}&best`)
            .then((result) => setPostList(result.data.data.children))
        }
    })

  return (
    <div className='col justify-content-center container'>
        { postList.length !== 0 ? (
            <Posts posts={postList}/>
        ) : 
            <div className='row'>
                <h1>Redireccionando...</h1>
            </div>
        }
    </div>
  )
}

export default BestList