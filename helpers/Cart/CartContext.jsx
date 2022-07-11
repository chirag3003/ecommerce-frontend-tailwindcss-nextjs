import React, {useEffect, useState} from 'react';
import context from "./index"
import {QUANTITY_LIMIT} from "../../config/cart";

function setLocalCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

function CartContext({children}) {
    const [cartItems, setCartItems] = useState([])

    const setCartItemQuantity = (id, size, quantity) => {
        if (quantity > QUANTITY_LIMIT || quantity < 1) return;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id && cartItems[i].size === size) {
                let newItems = [...cartItems];
                newItems[i].quantity = Number(quantity)
                setCartItems(newItems)
                setLocalCartItems(newItems)
                break;
            }
        }
    }
    const addCartItem = (id, size) => {
        let addNew = true;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id && cartItems[i].size === size) {
                addNew = false
                let newItems = [...cartItems];
                if (newItems[i].quantity < QUANTITY_LIMIT) {
                    newItems[i].quantity += 1
                    setCartItems(newItems)
                    setLocalCartItems(newItems)
                    break;
                }
            }
        }
        if (addNew) {
            let newItems = [...cartItems, {
                id: id, quantity: 1, size,
            }]
            setCartItems(newItems)
            setLocalCartItems(newItems)
        }
    }
    const reduceItem = (id, size) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id && cartItems[i].size === size) {
                let newItems = [...cartItems];
                if (newItems[i].quantity <= 1) {
                    removeItem(id, size)
                    break
                }
                newItems[i].quantity -= 1
                setCartItems(newItems)
                setLocalCartItems(newItems)
                break;
            }
        }
    }
    const removeItem = (id, size) => {
        let newItems = []
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id && cartItems[i].size === size) {
                if (i !== cartItems.length - 1) newItems = [...newItems, ...cartItems.splice(i + 1)]
                break;
            } else {
                newItems.push(cartItems[i])
            }
        }
        setCartItems(newItems)
        setLocalCartItems(newItems)
    }

    const getCartItem = (id, size) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id && cartItems[i].size === size) return cartItems[i]
        }
        return null
    }

    const setCart = (items) => {
        setCartItems(items)
        setLocalCartItems(items)
    }

    useEffect(() => {
        try {
            let items = JSON.parse(localStorage.getItem("cartItems"))
            if (items) {
                setCartItems(items)
            }
        } catch (e) {
            setCartItems([])
        }
    }, [])
    return (
        <context.Provider
            value={{
                cartItems, setCartItemQuantity, addCartItem, reduceItem, removeItem, getCartItem,setCart
            }}
        >
            {children}
        </context.Provider>
    );
}

export default CartContext;