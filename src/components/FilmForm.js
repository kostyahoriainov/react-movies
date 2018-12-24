import React, { Component } from 'react';
import ReactImageFallback from 'react-image-fallback';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const initialData = {
    title: '',
    duration: 0,
    price: 0,
    director: '',
    featured: false,
    im: '',
    id: null
}

export default class FilmForm extends Component {

    state = {
        data: {
            title: '',
            description: '',
            director: '',
            duration: 0,
            price: 0,
            featured: false,
            im: '',
            id: null
        },
        errors: {}
    };

    componentDidMount() {
        if (this.props.film.id) {
            this.setState({
                data: this.props.film
            })
        }
    }

    static getDerivedStateFromProps(nextProps, state) {

        if (nextProps.film.id && nextProps.film.id !== state.data.id) {
            return {
                data: nextProps.film
            }
        }
        if (!nextProps.film.id && state.data.id) {
            return {
                data: initialData
            }
        }
        return null;
    }

    handleChange = ({target}) => this.setState(({data, errors}) => ({
        data: target.type === 'number' ?
            { ...data, [target.name]: parseFloat(target.value)}
            :
            { ...data, [target.name]: target.value },
        errors: {...errors, [target.name]: ''}

    }))

    validate = (data) => {
        let errors = {};
        if(!data.title) errors.title = 'This field cant be blank';
        if (!data.description) errors.description = 'This field cant be blank';
        if (!data.duration > 0) errors.duration = 'Too short';
        if (!data.price > 0) errors.price = 'Too cheap';
        if (!data.director) errors.director = 'This field cant be blank';
        if (!data.im) errors.im = 'This field cant be blank';
        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validate(this.state.data);
        this.setState({errors})
        if(Object.keys(errors).length === 0) {
            this.props.saveFilm(this.state.data)
        }
    }

    handleToggleChange = ({target}) => this.setState({
        data: { ...this.state.data, [target.name]: !this.state.data[target.name]}
    })




    render() {
        const { data, errors } = this.state;
        return (
            <div className="ui grid">
                <div className="eight wide column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            name="title"
                            placeholder="Film title"
                            onChange={this.handleChange}
                            value={data.title}
                            content={errors.title}
                        />
                        <FormInput
                            type="text"
                            name="description"
                            placeholder="Film description"
                            onChange={this.handleChange}
                            value={data.description}
                            content={errors.description}
                        />
                        <FormInput
                            type="text"
                            name="director"
                            placeholder="Film director"
                            onChange={this.handleChange}
                            value={data.director}
                            content={errors.director}
                        />
                        <FormInput
                            type="number"
                            name="duration"
                            placeholder="Film duration"
                            onChange={this.handleChange}
                            value={data.duration}
                            content={errors.duration}
                        />
                        <FormInput
                            type="number"
                            name="price"
                            placeholder="Film price"
                            onChange={this.handleChange}
                            value={data.price}
                            content={errors.price}
                        />
                        <FormInput
                            type="checkbox"
                            name="featured"
                            placeholder="Film featured"
                            onChange={this.handleToggleChange}
                            value={data.featured}
                            content={errors.featured}
                        />
                        <FormInput
                            type="text"
                            name="im"
                            placeholder="Poster URL"
                            onChange={this.handleChange}
                            value={data.im}
                            content={errors.im}
                        />

                        <ReactImageFallback
                            src={data.im}
                            alt="film poster"
                            className="ui image"
                            fallbackImage="http://via.placeholder.com/290x360"
                        />
    
                        <div className="field">
                            <button className="ui button">Create film</button>
                            <div className="or"/>
                            <button className="ui button" onClick={this.props.closeForm}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


FilmForm.propTypes = {
    closeForm: PropTypes.func.isRequired,
    saveFilm: PropTypes.func.isRequired
}