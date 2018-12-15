/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';


const FilmCart = ({ film, toggleFeatured}) => (

    <div className="ui card">
        <div className="image">
            <Price price={film.price}/>
            <Featured toggleFeatured={() => {toggleFeatured(film.id)}} featured={film.featured}/>
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
        featured: PropTypes.bool.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired
}

export default FilmCart