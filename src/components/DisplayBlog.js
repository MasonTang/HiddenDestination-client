import React from 'react'

const DisplayBlog = props => {
    console.log(props.blogs.username)

    if(props.loading) {
        return(
            <div>
                <p>Loading Blogs ...</p>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.blogs.map(blog => (
                        <li key={blog._id}>
                            <p className="blue">{blog.username}</p>
                            <p>{blog.blog}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DisplayBlog
