import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [error, setError] = useState(null); // [state, setState
    const [pending, setPending] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => { 
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal : abortCont.signal }).then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                    
                }
                
                return res.json()
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            }).catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                console.log(err.message);
                setError(err.message);
                

            });
            
        },1000)
        return () => console.log(abortCont.abort());
    },[url]);  
    return { data, pending, error }
}


export default useFetch;