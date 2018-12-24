import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';
import Message from './Message';


const FilmList = ({ films, toggleFeatured, editFilm, removeFilm }) => (

    <div className="ui cards four">
        {
            films.length === 0 ?
                (
                    <Message header="Not found" message="Not found any films ins store" />
                ) : (
                    films.map(film => <FilmCard key={film.id} 
                                                film={film} 
                                                toggleFeatured={toggleFeatured} 
                                                editFilm={editFilm} 
                                                removeFilm={removeFilm} 
                                                />)
                )
        
        }
    </div>
)

FilmList.propTypes = {
    films: PropTypes.instanceOf(Array).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    editFilm: PropTypes.func.isRequired,
    removeFilm: PropTypes.func.isRequired
}

FilmList.defaultProps = {
    films: []
}

export default FilmList