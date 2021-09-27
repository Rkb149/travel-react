import React from 'react';
import AddTour from '../AddTour/AddTour';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((previous, location) => previous + location.cost, 0);

    return (
        <div>
            <div className="added-tour">
                <h3>Add Your Tour: {props.cart.length}</h3>
                <br />
                <p>Total Coust: {total}Tk</p>
            </div>
            <div>
                <ul>
                    {
                        cart.map(writer => <li className="list" >
                            <img width='80' height='80' src={writer.img} /> <span>{writer.name}</span>
                        </li>)
                    }
                </ul>
                {/* <ul>
                    {cart.map(addTour => <AddTour cart={cart}

                    ></AddTour>)}
                </ul> */}

            </div>

        </div>
    );
};

export default Cart;