import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contact-actions';
// import { connect } from 'react-redux';
// import styles from './Filter.module.scss';
import { getFilter } from '../../redux/contacts/contact-selectors';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  find: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  typography: {
    marginBottom: theme.spacing(2),
  },

  form: {
    width: 320,
  },
}));

const Filter = () => {
  const classes = useStyles();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm">
      <div className={classes.find}>
        <Typography component="h4" variant="h6" className={classes.typography}>
          FIND USER
        </Typography>
        <form className={classes.form} autoComplete="off">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            value={value}
            className={classes.input}
            onChange={event =>
              dispatch(contactsActions.changeFilter(event.target.value))
            }
            autoComplete="off"
          />
        </form>
      </div>
    </Container>
  );
};

export default Filter;

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// const mapStateToProps = state => ({
//     value: state.contacts.filter,
// })

// const mapDispatchToProps = dispatch => {
//     return {
//         onChange: (e) => dispatch(chengeFilter(e.currentTarget.value)),
//     }
// }
