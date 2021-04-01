import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Product.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
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
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    // console.log(props.product,features);
    // const classes = useStyles();
    const handelBuyBtn = (event) =>{
       

// console.log(name,photoUrl,price);
// console.log(new Date());
let newProduct = {...addedProduct}
// name:"",price:"",photoUrl:"",BuingDate:""
newProduct.name =name
newProduct.price =price
newProduct.photoUrl =photoUrl
newProduct.BuingDate =new Date()



setAddedProduct(newProduct)
    }
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
                    <button onClick={()=>handelBuyBtn()}  className='buyBtn'>Buy now</button>
                </div>
                </div>
            
            </Paper>
      </Grid>
        
    
    );
};

export default Products;