import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("FroCode");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
       
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
            
            
        }).then(() => {
            setIsPending(false);
            history.push('/');
            console.log("New Blog Added");
            console.log(setIsPending);
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
            { !isPending && <button >Add Blog</button>}
            { isPending && <button > Adding Blogs.... </button>}

            
        </form>
        </div>
    )
}
export default Create;