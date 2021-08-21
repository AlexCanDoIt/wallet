import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = false;
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}