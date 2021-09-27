import React from 'react';

const AddTour = (props) => {
    const { img } = props;
    console.log(props.name);
    return (
        <div>
            <div className="add-tour">
                <p>{img}</p>
            </div>
        </div>
    );
};

export default AddTour;