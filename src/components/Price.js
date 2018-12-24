import React from 'react';
import PropTypes from 'prop-types';

const Price = ({price}) => {

        if (price < 50) {
            return <span className="ui green label ribbon">  $ {price} ? </span>
        }
        
        return (
            <span className="ui green label ribbon"> $ {price} </span>
        )
}

Price.propTypes = {
    price: PropTypes.number.isRequired
}

export default Price