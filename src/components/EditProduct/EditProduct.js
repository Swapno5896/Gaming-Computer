import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './EditProduct.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
const EditProduct = (props) => {
    const {name,photoUrl,features,price} =props.product
    return (
        <Grid item xs={12} sm={12} md={12} >
        <Paper style={{height:'100px'}} className='container'>
      
      {/* <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> */}
    
        <img className='ProductImg' src={photoUrl} alt=""/>
        <h4 className='product Name'>{name}</h4>
        <p className='product Price'> {price}</p>

  <div className="btn">
  <button className='button'>edit</button>
    <button  className='button'>delet</button>
  </div>
        </Paper>
      </Grid>
    );
};

export default EditProduct;