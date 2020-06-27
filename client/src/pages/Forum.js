import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import { PostTable, PostForm } from "../components";

function Forum(props) {
    const initialFormState = { title: "", body: "" };
    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState(initialFormState)


    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = () => {
        API.Post.getAll().then(res => {
            setPosts(res.data);
        })
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: formObject.title,
            body: formObject.body
        }
        API.Post.create(data).then(res => {
            setFormObject(initialFormState);
            loadPosts();
        })
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <PostForm
                        formObject={formObject}
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PostTable posts={posts} />
                </Grid>
            </Grid>
        </>
    )

}


export default Forum;