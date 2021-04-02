import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
const CheckOut = () => {
    const {_id} = useParams();
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    const handelLoadProduct = () =>{
        fetch(`https://gamenig.herokuapp.com/checkOut/${_id}`)
        .then(res=>res.json())
        .then(result=>{
            const {name,photoUrl,features,price,_id} =result[0]
            let newProduct = {...addedProduct}
            newProduct.name =name
            newProduct.price =price
            newProduct.photoUrl =photoUrl
            newProduct.BuingDate =new Date()
            setAddedProduct(newProduct)
        })
    }
    handelLoadProduct()
    const handelCheckOut = ()=>{
        const order = {...loggedInUser,...addedProduct}
        fetch('https://gamenig.herokuapp.com/addToCart',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify([order])                       
        })
}
    return (
        <div style={{margin:'50px 35%', display:'flex'}}>
        {
            addedProduct.name ?
                <div>
                <img style={{width:'50px'}} src={addedProduct.photoUrl} alt=""/>
                <p>{addedProduct.name}</p>
                <p>{addedProduct.price}</p>
                <button onClick={handelCheckOut}>Check Out</button>
                </div>
            :
            <h2>You havent added anythig</h2>}
        
        </div>
    );
};

export default CheckOut;