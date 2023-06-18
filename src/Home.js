import React, { useEffect ,useState } from 'react';

import BlogList from './BlogList';

const Home = () => {
    // Start My Component
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        
    }
    const [error, setError] = useState(null); // [state, setState
    const [pending, setPending] = useState(true);
    
    useEffect(() => { 
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/').then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                } 
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            }).catch(err => {
                console.log(err.message);
                

            });
            
        },);
       
    },[]);  
    return (
        
        <div className="home">
            {pending && <div className='loading'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs !" />}
            
        </div>
         
    );
    
}


export default Home;