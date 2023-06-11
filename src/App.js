
import './App.css';

function App() {
    console.log("helo")
    console.log("helo")
    const title = "Welcome to the new Blog"
    let likes = 50;
    const person = {name: "yoshi", age: 30}
    const link = "http://www.google.com"
  return (
    <div className="App">
        <div className="contnent">
            <h1>{title} </h1>
            <p>{likes} </p>
            <p>{ 10 }</p>
            <p>{ "hello ninjas " }</p>
            <p>{ Math.random()  * 0.5 * 10 * Math.floor() }</p>
            <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
