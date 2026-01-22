import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import {useContext, useState}from "react";
import GlobalContext from "../state/globalContext";

function Product(props){
const[quantity, setQuantity] = useState(1);
// const user = useContext(GlobalContext).user
const gloablAdd = useContext(GlobalContext).addProductToCart

    function handleQuantityChange(quantity){
        console.log("Quantity changed to: ", quantity);
        setQuantity(quantity);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function onAdd(){
        console.log("Adding product...")
        console.log(props.data)

        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity

        gloablAdd(fixedProduct)
    }

    return(
        <div className="product">
            <img src={"./images/"+props.data.image}></img>
            <h5>{props.data.title} </h5>
            <div className="prices ">
                <label>Price: </label>
                <label> $</label>
            <label>{props.data.price.toFixed(2)}</label>
            <div>
                <label>Total: </label>
                <label>$</label>
                 <label>{getTotal()}</label>
            </div>
           
            
        </div>
        <QuantityPicker onChange={handleQuantityChange}/>
        <button className="btn btn-dark mt-4" onClick={onAdd}>Add Product</button>
        </div>
            
    );
}
export default Product;