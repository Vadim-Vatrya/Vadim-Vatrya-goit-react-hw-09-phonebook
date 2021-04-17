import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    margin: {
      right: 'auto',
      left: 'auto',
    },
    padding: '20px',
    width: '280px',
  },
  '@media (min-width: 720px)': {
    container: {
      width: 680,
    },
  },
  '@media (min-width: 1200px)': {
    container: {
      width: 1160,
    },
  },

})

const Container = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node,
};

export default Container