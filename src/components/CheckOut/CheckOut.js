import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
const CheckOut = () => {
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    const handelCheckOut = ()=>{
        const order = {...loggedInUser,...addedProduct}
        // fetch('https://gamenig.herokuapp.com/addToCart',{
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //         body:JSON.stringify(order)
        //         .then(res=>res.JSON())
        //         .then(data=>console.log(data))
        //             })


                    fetch('https://gamenig.herokuapp.com/addToCart',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify([order])
                    
                      })

    }
    return (
        <div style={{margin:'50px 35%', display:'flex'}}>
            <img style={{width:'50px'}} src={addedProduct.photoUrl} alt=""/>
           <p>{addedProduct.name}</p>
           <p>{addedProduct.price}</p>
           <button onClick={handelCheckOut}>Check Out</button>
        </div>
    );
};

export default CheckOut;