import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){

    const [quantity, setQuantity] = useState(1);
    //     name      function        state   ^inital value
    //let quantity = 1; 
    // quantity = 2; // this wont work in react 
    // we need to use setQuantity to update the value
    function handleIncrease(){
        let temporalValue = quantity +1;
        setQuantity(temporalValue);
        props.onChange(temporalValue);
    }

      function handleDecrease(){
        let temporalValue = quantity -1;
       if(temporalValue === 0){
        return;
       }
       setQuantity(temporalValue);
        props.onChange(temporalValue);
    }

    return (
        <div className="quantity-picker">
            <button className="btn btn-dark" onClick={handleDecrease}disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}
export default QuantityPicker;