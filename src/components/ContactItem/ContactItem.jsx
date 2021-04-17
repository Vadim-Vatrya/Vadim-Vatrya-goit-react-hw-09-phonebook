import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {deleteContact} from '../../redux/contacts/contact-operations';


import styles from './ContactItem.module.scss';



const ContactItem = ({ name, number, id }) => {

    const dispatch = useDispatch();
    return (
        <>
           
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};


// const mapDispatchToProps = dispatch => {
//     return {
//         onDeleteContact: id => dispatch(deleteContact(id))
//     }
// };