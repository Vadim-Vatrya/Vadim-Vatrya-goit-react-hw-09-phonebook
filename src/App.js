import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authOperations from './redux/auth/auth-operations'
import authSelectors from './redux/auth/auth-selectors';
import AppBar from './components/AppBar';
import Container from './components/Container';
import Loader from './components/Loader';
// import HomeView from './views/HomeView';
// import ContactsView from './views/ContactsView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';


const HomeView = lazy(() =>
    import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
    import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
    import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
    import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);


const App = () => {
   
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);


    useEffect(() => {
      dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <Container>

{isFetchingCurrentUser ? (
                <h1>Show React Skeleton</h1>
            ) : (
                <>
                 <AppBar />
                 <Suspense fallback={<Loader />} >
                     
                     <Switch>
                         <PublicRoute exact path="/">
                             <HomeView />
                         </PublicRoute>
                         <PrivateRoute path='/contacts'  redirectTo="/login">
                             <ContactsView />
                         </PrivateRoute>  
                         <PublicRoute path="/register" restricted redirectTo="/contacts">
                             <RegisterView />
                         </PublicRoute> 
                         <PublicRoute path="/login" restricted redirectTo="/contacts">
                             <LoginView />
                         </PublicRoute> 
                         <Redirect to="/" />
                     </Switch>
                 </Suspense>
            </>)}
        </Container>
        

    )
};

export default App;

