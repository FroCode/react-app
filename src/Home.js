
import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {
    // Start My Component
    
    const { data: blogs , pending, error } = useFetch('http://localhost:8000/blogs/');
    
    
    
    
    return (
        
        <div className="home">
            {error && <div>{error}</div>}
            {pending && <div className='loading'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            
        </div>
         
    );
    
}


export default Home;