import { createContext , useEffect, useState } from "react";

export const shopContext = createContext(null);


export const ShopContextProvider = (props) => {

    const [cartItems , setCartItems] = useState ([]);

    useEffect( () => {

        const data = localStorage.getItem("Shopify")

        setCartItems (!!JSON.parse(data) ? JSON.parse(data) : [] )

    },[])

    useEffect( () => {

        if ( cartItems !== undefined)

        localStorage.setItem("Shopify" , JSON.stringify(cartItems))

    },[cartItems])

    
    const addToCart = (id) => {
        
        // اگر چیزی اضافه نشده باشه

        if ( !cartItems?.find((item) => item.id === id)) 

        setCartItems([...cartItems , {id : id , count : 1}])

        else

        setCartItems(cartItems.map((item) => {

            if ( item.id === id )
                return { ...item , count : item.count + 1 }

            else return item 
            // بقیه آیتمها دست نخورده بمونن
        }))
    }

    const removeFromCart = (id) => {

        setCartItems(cartItems.map((i) => {

            if( i.id === id )
            return {...i , count : i.count === 0 ? 0: i.count - 1 }
            else return i
        }))
    }

    const resetCart = () => {
        setCartItems([]);
        localStorage.removeItem("Shopify");
        localStorage.clear()
    }

    const contextValue = { cartItems , addToCart , removeFromCart , resetCart }

    return <shopContext.Provider value = { contextValue } > {props.children} </shopContext.Provider>
}