import React from "react";
import Posts from "../../components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store/posts/slice";

const PostsContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsReducer.posts);

    console.log(posts, 'posts')

    const handleAddPost = () => {
        dispatch(addPosts({
            title: 'title',
            body: 'body'
        }));
    }

    return <Posts posts={posts} handleAddPost={handleAddPost} />
}

export default PostsContainer;