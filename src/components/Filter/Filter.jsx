import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contact-actions';
// import { connect } from 'react-redux';
// import styles from './Filter.module.scss';
import { getFilter } from '../../redux/contacts/contact-selectors';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    label: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 17,
      marginBottom: 15,
      fontWeight: 500,
    },
    
    input: {
      padding: 2,
      marginTop: 5,
      maxWidth: 190,
      height: 30,
      outline: 'none',
    textAlign: 'center',
      border: ['1px', 'solid', 'gray'],
      borderRadius: 5,
    }
  
  })


const Filter = () => {
    const classes = useStyles();
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <label className={classes.label}>
            Find contacts by name
            <input
                type="text"
                className={classes.input}
                value={value}
                onChange={event =>
                    dispatch(contactsActions.changeFilter(event.target.value))
                }
                autoComplete="off"
            />
        </label>
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