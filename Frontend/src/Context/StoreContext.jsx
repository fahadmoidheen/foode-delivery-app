
import { createContext ,useState} from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({}); 


    const addToCart = (itemId) => {
        
        if(!cartItems[itemId]){ 
            setCartItems((prev)=>({ ...prev, [itemId]: 1}))
        }
        else{
            setCartItems((prev)=>({ ...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeItem = (itemId) => {
        setCartItems((prev)=>({ ...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmont=0;
        for (const item in cartItems){
            console.log(cartItems[item]);
           if(cartItems[item]>0){
            let cartInfo = food_list.find((product)=>product._id === item);
            totalAmont += cartInfo.price * cartItems[item];
           }
        }
        return totalAmont;
    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeItem,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider