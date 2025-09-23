import {  useParams } from "react-router-dom";

const DynamicRoute = () => {
    const {id} = useParams();
    return (
        <div>
            
                <h2>User Page</h2>
                <p>You are viewing details for <b>User {id}</b></p>
           
        </div>
    )
}

export default DynamicRoute
