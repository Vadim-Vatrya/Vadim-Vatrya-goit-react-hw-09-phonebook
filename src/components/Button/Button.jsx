import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({

  button: {
    cursor: 'pointer',
    alighItems: 'center',
    marginTop: theme.spacing(2),
    width: 320,
  },

}));

const ButtonAdd = () => {
  const classes = useStyles();

  return (
    <Button 
     type='submit'
     variant="contained"
     color="primary" 
     className={classes.button}>
      Add contact
    </Button>
  )
};

export default ButtonAdd;