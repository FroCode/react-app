import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
        
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input type="text"  value={title} onChange={(e) => {
                setTitle(e.target.value);
            }} required/>
            <label>Blog body:</label>
            <textarea  value={body} required onChange={(e) => {
                setBody(e.target.value);
            }}></textarea>
            <label>Blog Author:</label>
            <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                <option  value="Abdo">Abdo</option>
                <option value="FroCode">FroCode</option>
            </select>
            <button >Add Blog</button>
            <p>{author}</p>
        </form>
        </div>
    )
}
export default Create;