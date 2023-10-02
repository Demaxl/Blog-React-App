import { useLoaderData } from "react-router-dom"


export async function loader({ params }) {
    const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const commentData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);


    const post = await postData.json();
    const comments = await commentData.json();

    return { post, comments }
}

function Comment({ email, message }) {
    return (
        <div className="comment">
            <div className="comment-header">
                <strong>{email}</strong>
            </div>
            <div className="comment-content">
                { message }
            </div>
        </div>
    )
}


export default function Post() {
    const {post, comments} = useLoaderData();

    return (
        <div className="container">
            <h1 className="display-3">{post.title}</h1>
            <hr />
            <p>{post.body}</p>

            
            <h3 className="mt-5">Comments</h3>
            <hr />
            <div className="comment-container ms-5">
                {comments.map(comment => <Comment key={comment.id} email={comment.email} message={comment.body}/>)}
            </div>
        </div>

    )
}