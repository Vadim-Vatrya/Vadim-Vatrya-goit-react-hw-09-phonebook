import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/contact-operations';

// import styles from './ContactItem.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  name: {
    marginRight: 70,
  },

  number: {
    marginRight: 10,
    fontSize: 12,
  },

  avatar: {
    marginRight: 15,
  },
}));

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <ListItem>
        <ListItemAvatar classes={classes.li}>
          <Avatar src="/broken-image.jpg" className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText>
          <span className={classes.name}>{name}</span>
          <span className={classes.number}>{number}</span>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Container>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
