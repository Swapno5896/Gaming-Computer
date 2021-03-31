import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/GamingMachain'
import Products from '../Products/Products';
// material ui grid
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Home = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([])
    // const handleAddProducts = () =>{
    //     fetch('http://localhost:5000/add',{
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body:JSON.stringify(FakeData)
    //     })
    // }
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(res=>setProducts(res))
    },[])
    return (
        <div style={{margin:'0px 20%'}}>
<h3>this is home</h3>

<Grid container spacing={3}>
        {
            products.map(product=><Products product={product}></Products>)
        }
      
      </Grid>

        </div>
    );
};

export default Home;