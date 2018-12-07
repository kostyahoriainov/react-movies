/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';


const FilmList = ({ films }) => (

    <div className="ui cards four">
        {
            films.map(film => <FilmCard key={film.id} film={film}/>)
        }
    </div>
)

FilmList.propTypes = {
    films: PropTypes.array.isRequired
}

FilmList.defaultProps = {
    films: []
}

export default FilmList