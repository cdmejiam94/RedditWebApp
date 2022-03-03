import React from 'react'

const Posts = ({posts = []}) => {
  return (
    <div className='row'>
        {posts.map((item, index) => (
            <div key={index} className='col mb-4'>
                <div className='card' style={{minWidth: "200px"}}>
                    <img src={item.data.thumbnail} alt=''/>
                    <div className='card-body'>
                        <h5 className='card-title text-uppercase'>
                            {item.data.title}
                        </h5>
                        <hr/>
                        <p>Url: {item.data.url}</p>
                    </div>
                </div>
            </div>
        ))}        
    </div>
  )
}

export default Posts