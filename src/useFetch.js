import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [error, setError] = useState(null); // [state, setState
    const [pending, setPending] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => { 
        setTimeout(() => {
            fetch(url).then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                    
                }
                
                return res.json()
            })
            .then(data => {
                setData(data);
                setPending(false);
            }).catch(err => {
                console.log(err.message);
                setError(err.message);
                

            });
            
        },1000);
       
    },[url]);  
    return { data, pending, error }
}


export default useFetch;