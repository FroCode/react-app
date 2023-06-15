

const BlogList = (props) => {
    const blogs = props.blogs;
    console.log(props, blogs)
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                </div>
            ))}
        </div>
    )
}
export default BlogList;