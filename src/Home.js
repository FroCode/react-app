import React, { useState } from 'react';
const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(21);
    const handleClick = (e) => {
        console.log('hello ninjas', e);
        setName('luigi');
        setAge(30);

    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age}</p>
            <button onClick={handleClick}>Click Me </button>
        </div>
    );
}
export default Home;