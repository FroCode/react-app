import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("FroCode");
    const [pending, setPending] = useState(false);
    

    const handleSubmit = (e) => {

        e.preventDefault();
        const blog = { title, body, author };
        setPending(true);
       
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
            
        }).then(() => {
            setPending(false);
        })
        
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
            { !setPending && <button >Add Blog</button>}
            { setPending && <button disabled >Adding Blogs....</button>}

            
        </form>
        </div>
    )
}
export default Create;