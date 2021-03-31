import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Product.css'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));
const Products = (props) => {
    const {name,photoUrl,features,price} =props.product
    console.log(props.product,features);
    // const classes = useStyles();
    return (
        
        <Grid item xs={12} sm={6} md={4} >
        <Paper style={{height:'550px'}}>
      
    <div style={{textAlign:'center'}}>
    <img className='ProductImg' src={photoUrl} alt=""/>
    </div>
    <div>
    <h4>{name}</h4>
        {
          features&&  features.map(fe=> <li>{fe}</li>)
        }
        <div className='buyContainear'> 
        <p className='productPrice'>Price only : {price}</p>
    <button className='buyBtn'>Buy now</button>
        </div>
    </div>
   
        </Paper>
      </Grid>
        
    
    );
};

export default Products;