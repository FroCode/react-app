import { Link } from "react-router-dom";
const NotFound = () => {

    return ( 
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>That Page Can Not be Found 404</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;