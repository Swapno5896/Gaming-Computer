import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    console.log('p',loggedInUser);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;