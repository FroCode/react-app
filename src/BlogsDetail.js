import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data: blog, error, pending} = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }
   
    return ( 
        <div className="blog-details">
        <h2>Blog Details - {id}</h2>
        { error && <div>{error}</div>}
        { pending && <div>Loading...</div>}
        { blog && ( <article>
            {blog.body}
            <h1>{blog.title}</h1>
            <p>Written By: {blog.author}</p>
            <span>{blog.date}</span>
            <span>{blog.author}</span>
            <button onClick={handleDelete}>Delete</button>

            </article>)}
          
        </div>
     );
}
 
export default BlogDetail;