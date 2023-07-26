import React from 'react';
import MyInput from "./UI/inout/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = React.useState({
        title: '',
        body: ''
    });

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value = {post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Назввание поста"
            />
            <MyInput
                value = {post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;