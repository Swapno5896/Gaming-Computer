import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';
const Order = () => {
    const [order, setOrder] = useState([])
    const [isLoaded, setIsLoaded] = useState(true);
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    const handelLoding =()=>{
        setIsLoaded(!isLoaded)
      }


   
    loggedInUser.email &&   fetch('https://gamenig.herokuapp.com/showProduct/'+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
            handelLoding()
        })

 
    return (
        <div>
          {
              isLoaded && <LoadingSpiner></LoadingSpiner>
            }
           {
              loggedInUser.email && order.map(pd=>   <li>{pd.name} price : {pd.price}</li>) 
           }
          
        </div>
    );
};

export default Order;