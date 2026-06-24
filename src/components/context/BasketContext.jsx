import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

export function BasketProvider({ children }) {
    const [sebet, setSebet] = useState([])

    const addBasket = (id, title, price, image) => {
        setSebet(prevSebet => {
            const existing = prevSebet.find(item => item.id === id)
            if (existing) {
                return prevSebet.map(item => 
                    item.id === id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                )
            }
            return [...prevSebet, { id, title, price, image, quantity: 1 }]
        })
    }

    const removeFromBasket = (id) => {
        setSebet(prevSebet => prevSebet.filter(item => item.id !== id))
    }

    const increaseQuantity = (id) => {
        setSebet(prevSebet => 
            prevSebet.map(item => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    const decreaseQuantity = (id) => {
        setSebet(prevSebet => 
            prevSebet.map(item => 
                item.id === id && item.quantity > 1 
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            )
        )
    }

    const totalPrice = sebet.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalItems = sebet.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <BasketContext.Provider value={{ 
            sebet, 
            addBasket, 
            removeFromBasket, 
            increaseQuantity, 
            decreaseQuantity,
            totalPrice,
            totalItems 
        }}>
            {children}
        </BasketContext.Provider>
    )
}