/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';


const FilmCart = ({film}) => (

    <div className="ui card">
        <div className="image">
            <Price price={film.price}/>
            <img src={film.im} alt={film.title}/>
        </div>
        <div className="content">
            <a href="#" className="header">{film.title}</a>

            <div className="meta">
                <i className="icon users"/>{film.director}
                <i className="icon wait"/> {film.duration} min
            </div>
        </div>
    </div>
)

FilmCart.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        im: PropTypes.string.isRequired,
        featured: PropTypes.any.isRequired
    }).isRequired
}

export default FilmCart