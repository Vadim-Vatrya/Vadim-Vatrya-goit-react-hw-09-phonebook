import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors  from '../redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) {
    const IsAuthenticated  = useSelector(authSelectors.getIsAuthenticated);

    return (
        <Route {...routeProps}>
            { IsAuthenticated  && restricted ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}