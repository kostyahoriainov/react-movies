/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';
import RemoveFilmModal from './RemoveFilmModal';


const FilmCart = ({ film, toggleFeatured, editFilm, removeFilm}) => (

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

            <div className="extra">
                <a className="ui basic green button" href="#" onClick={() => editFilm(film)}>
                    <i className="ui icon edit"/>
                </a>

                <>
                    <RemoveFilmModal film={film} removeFilm={() => removeFilm(film.id)}/>
                </>
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
    toggleFeatured: PropTypes.func.isRequired,
    editFilm: PropTypes.func.isRequired,
    removeFilm: PropTypes.func.isRequired
}

export default FilmCart