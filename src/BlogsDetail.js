import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetail = () => {
    const {id } = useParams();
    const { data: blog, error, pending } = useFetch("http://localhost:8000/blogs/" + id);
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
            

            </article>)}
          
        </div>
     );
}
 
export default BlogDetail;