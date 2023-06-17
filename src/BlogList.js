const BlogList = ( {blogs, handleDelete}) => {



  return (


    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blogPreview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );




}
export default BlogList;