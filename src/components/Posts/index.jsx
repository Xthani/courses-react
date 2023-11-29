import React from "react";

const Posts = ({ posts, handleAddPost }) => {
    return (
        <>
            <button onClick={handleAddPost}>ADD</button>
            <ul>
                {posts.map((post) => {
                    return (
                        <li>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Posts;