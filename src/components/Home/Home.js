import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
// material ui grid
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';

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
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(()=>{
        fetch('https://gamenig.herokuapp.com/products')
        .then(res=>res.json())
        .then(res=>{setProducts(res)
          handelLoding()
        })
    },[])
    const handelLoding =()=>{
      setIsLoaded(!isLoaded)
    }
    return (
        <div style={{margin:'0px 20%'}}>
          <Grid container spacing={3}>
           <div className="loading" style={{display:'relative',marginLeft:'100px'}}>
           {
              isLoaded && <LoadingSpiner></LoadingSpiner>
            }
           </div>
            {
                products.map(product=><Products key={product._id} product={product}></Products>)
            }        
         </Grid>
        </div>
    );
};

export default Home;