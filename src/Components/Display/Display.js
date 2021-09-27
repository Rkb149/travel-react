import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Destination from '../Destination/Destination';

const Display = () => {
    const [items, setItem] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('output (1).json')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const handleAddToCart = (item) => {
        // console.log(item.name);
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row g-4 ms-5">
                        {
                            items.map(item => <Destination
                                key={item.id}
                                item={item}
                                handleAddToCart={handleAddToCart}
                            ></Destination>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Display;