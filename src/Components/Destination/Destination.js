import React from 'react';
import './Destination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const Destination = (props) => {
    // console.log(props);
    const { name, img, cost, date, tourPlace, agency } = props.item;
    const element = <FontAwesomeIcon icon={faClock} />
    return (
        <div className="col-md-4">
            <div className="card-group " style={{ "maxWidth": "500px" }} >
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." style={{ "maxHeight": "150px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{agency}</p>
                        <p>{tourPlace}</p>
                        <div className="date-cost">
                            <p className="card-text"><span id="bdt">{element}</span>  {date} Days</p>
                            <p className="card-text"><span id="bdt"> @ BDT {cost} </span> </p>
                        </div>
                        <button
                            onClick={() => props.handleAddToCart(props.item)}
                            className="btn-regular btn-warning">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Destination;