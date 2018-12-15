import React, { Component } from 'react';
import ReactImageFallback from 'react-image-fallback';
import FormInput from './FormInput';

export default class FilmForm extends Component {

    state = {
        title: '',
        description: '',
        director: '',
        duration: 0,
        price: 0,
        featured: false,
        im: ''
    };

    handleChange = ({target}) => this.setState({
        [target.name]: target.type === 'number'? 
            parseFloat(target.value) : target.value})

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleToggleChange = ({target}) => this.setState({
        [target.name]: !this.state[target.name]
    })




    render() {
        const {title, description, director, duration, price, featured, im} = this.state;
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            name="title"
                            placeholder="Film title"
                            onChange={this.handleChange}
                            value={title}
                        />
                        <FormInput
                            type="text"
                            name="description"
                            placeholder="Film description"
                            onChange={this.handleChange}
                            value={description}
                        />
                        <FormInput
                            type="text"
                            name="director"
                            placeholder="Film director"
                            onChange={this.handleChange}
                            value={director}
                        />
                        <FormInput
                            type="number"
                            name="duration"
                            placeholder="Film duration"
                            onChange={this.handleChange}
                            value={duration}
                        />
                        <FormInput
                            type="number"
                            name="price"
                            placeholder="Film price"
                            onChange={this.handleChange}
                            value={price}
                        />
                        <FormInput
                            type="checkbox"
                            name="featured"
                            placeholder="Film featured"
                            onChange={this.handleToggleChange}
                            value={featured}
                        />
                        <FormInput
                            type="text"
                            name="im"
                            placeholder="Poster URL"
                            onChange={this.handleChange}
                            value={im}
                        />

                        <ReactImageFallback
                            src={im}
                            alt="film poster"
                            className="ui image"
                            fallbackImage='http://via.placeholder.com/290x360'
                        />
    
                        <div className="field">
                            <button className="ui button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


