import React from 'react';
import PropTypes from 'prop-types';



const Nav = ( {showForm} ) => (
    <div className="ui secondary menu pointing">
        <a href="#" className="item" onClick={showForm}>Open</a>
    </div>
)

Nav.propTypes = {
    showForm: PropTypes.func.isRequired
}

export default Nav