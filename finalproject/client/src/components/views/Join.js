import React from 'react';
import Login from './Login';
import SignUp from './SignUp';


function Join () {
    return (
        <div>
            // Left part - SIte name , Short intro 
            <div>
                <h1>Sahayog</h1>
            </div>

            //Right Part
            <div>
                <Login />
                <SignUp />
            </div>
        </div>
    )
}
export default Join;