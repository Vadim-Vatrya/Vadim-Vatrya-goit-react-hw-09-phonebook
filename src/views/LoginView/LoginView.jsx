import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
// import styles from './LoginView.module.scss';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },

  typography: {
    marginBottom: theme.spacing(2),
  },

  form: {
    width: 320,
  },

  button: {
    cursor: 'pointer',
    alighItems: 'center',
    marginTop: theme.spacing(2),
    margin: theme.spacing(3, 0, 2),
    width: 320,
  },
}));

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email || !password) return;

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.login}>
        <Typography component="h2" variant="h6" className={classes.typography}>
          Log in User
        </Typography>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={classes.form}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            disableElevation
            startIcon={<CloudUploadIcon />}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginView;
