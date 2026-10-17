import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AboutInfo() {
    let { id } = useParams();
    let navigate = useNavigate();

    let [post, setPost] = useState(null);

    let goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            {
                post && (
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={goBack}>Назад</button>
                    </>
                )
            }
        </div>
    )
}

export default AboutInfo;