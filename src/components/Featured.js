/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featured, toggleFeatured }) => (

    <span onClick={toggleFeatured}>
        <a className={`ui right corner label ${ featured ? 'yellow' : ''}`}>
            <i className={`start icon`}/>
        </a>
    </span>
)

Featured.propTypes = {
    featured: PropTypes.bool.isRequired,
    toggleFeatured: PropTypes.func.isRequired
}

Featured.defaultProps = {
    featured: false
}



export default Featured