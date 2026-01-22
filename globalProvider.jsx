import {useState} from "react"
import GlobalContext from "./globalContext"

function GlobalProvider(props){
    const [cart, setCart] =useState([])
    const [user, setUser] = useState({name: "john", id: 63})

      //addProductToCart
    function addProductToCart(product){
        setCart([...cart, product])
    }

    //clearCart
    function clearCart (){
        setCart([])
    }

    //removeProductFromcart
    function removeProductFromcart(productId){
        console.log("Removing ", productId)

        const updateCart = cart.filter()

        const updatedCart = cart.filter(ClipboardItem._id !==productId)
        setCart(updateCart)
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromcart: removeProductFromcart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )


}
export default GlobalProvider