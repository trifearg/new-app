import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../Contexts/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
    const { auth } = useContext(authContext);
    return (
        <Route
            {...rest}
            render={routeProps => {
                return !auth.data ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to="/perinfo" />
                );
            }}
        />
    );
}

export default PublicRoute;