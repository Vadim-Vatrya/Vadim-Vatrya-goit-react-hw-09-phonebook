import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

// import styles from './ContactForm.module.scss';
import { addContact } from '../../redux/contacts/contact-operations';
import { getContacts } from '../../redux/contacts/contact-selectors';
import ButtonAdd from '../Button';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 320,
    },
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },

  typography: {
    // alignItems: 'center',
    marginBottom: theme.spacing(2),
  },

  form: {
    width: 320,
  },
}));

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert(`Enter name`);
      return;
    }

    if (number === '') {
      alert(`Enter number`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    const contact = { name, number };
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.login}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Enter name"
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            name="number"
            label="Enter number"
            variant="filled"
            onChange={handleChange}
          />
          <ButtonAdd />
        </form>
      </div>
    </Container>
  );
};
