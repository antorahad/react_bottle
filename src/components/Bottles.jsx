import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []) 

    const [cart, setCart] = useState([])

    const addCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>

            <h2>Cart Item: {cart.length}</h2>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} addCart={addCart} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;