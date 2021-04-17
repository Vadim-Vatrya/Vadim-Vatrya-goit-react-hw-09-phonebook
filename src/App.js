import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect} from 'react-router-dom';
import { lazy, Suspense } from 'react';

 
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authOperations from './redux/auth/auth-operations'

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

    useEffect(() => {
      dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <AppBar />
            <Suspense fallback={<Loader />} >

            <Switch>
                <PublicRoute exact path="/"component={HomeView} />
                <PrivateRoute path='/contacts'  redirectTo="/login" component ={ContactsView} />
                <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView}/>
                <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView}/>
                <Redirect to="/" />
            </Switch>
            </Suspense>
        </Container>
        

    )
};

export default App;

