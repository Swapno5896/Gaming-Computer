import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
const AddProductd = () => {
    const classes = useStyles();
    return (
        <div>
            <h3>this is add product</h3>
            <form className={classes.root} noValidate autoComplete="off">
  <TextField id="filled-basic" label="Enter Product Name" variant="filled" />
  <TextField id="filled-basic" label="Enter Feature" variant="filled" />
  <TextField id="filled-basic" label="Enter Price" variant="filled" />
  <input type="file" name="" id=""/>
</form>
        </div>
    );
};

export default AddProductd;