import React, { useEffect } from "react";
import Posts from "../../components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store/posts/slice";
import { fetchPosts } from "../../store/posts/actions";
import { getPosts } from "../../store/posts/selectors";

const PostsContainer = () => {
    const dispatch = useDispatch();
    const { isLoad, error, posts } = useSelector(getPosts);

    const handleAddPost = () => {
        dispatch(addPosts({
            title: 'title',
            body: 'body'
        }));
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <>
            {isLoad ? <h1>Идет загрузка!</h1> : <Posts error={error} posts={posts} handleAddPost={handleAddPost} />}
        </>
    );
}

export default PostsContainer;