import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import {useState}from "react";

function Product(props){
const[quantity, setQuantity] = useState(1);

    function handleQuantityChange(quantity){
        console.log("Quantity changed to: ", quantity);
        setQuantity(quantity);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
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
                <labe>$</labe>
                 <label>{getTotal()}</label>
            </div>
           
            
        </div>
        <QuantityPicker onChange={handleQuantityChange}/>
        </div>
            
    );
}
export default Product;