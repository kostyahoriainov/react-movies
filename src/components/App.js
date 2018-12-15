import React, { Component } from 'react';
import _orderBy from 'lodash/orderBy';
import data from '../data';
import FilmList from './FilmList';
import FilmForm from './FilmForm';

class App extends Component {

    state = {
        films: []
    };

    componentDidMount() {
        this.setState({
            films: _orderBy(data.films, ['featured', 'title'], ['desc', 'asc'])
        })
    }

    sortFilms = (films) => _orderBy(films, ['featured', 'title'], ['desc', 'asc'])

    toggleFeature = (id) => {
        this.setState({
            films: this.sortFilms(this.state.films.map(
                film => film.id === id ? { ...film, featured: !film.featured } : film
            ))
        })
    }


    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading...</h1>
        } 
        return (
            <div className="ui container">
                <FilmForm/>
                <FilmList toggleFeatured={this.toggleFeature} films={films}/>
            </div>
        );
    }
}


export default App;
