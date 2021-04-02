import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Product.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
const Products = (props) => {
    const history = useHistory()
    const {name,photoUrl,features,price,_id} =props.product
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    const handelBuyBtn = (event) =>{
    history.push(`/checkOut/${_id}`);
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