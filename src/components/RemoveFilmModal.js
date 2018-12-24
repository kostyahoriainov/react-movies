import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Button } from 'semantic-ui-react';


const RemoveFilmModal = ({ removeFilm, film }) => (

    <Modal trigger={
            <div className="ui basic red button">
                <Icon className="ui icon trash" />
            </div>}
            closeIcon
    >
        <Modal.Header>
            Are you sure?
        </Modal.Header>
        <Modal.Content>
                <div className="ui items">
                    <div className="item">
                        <div className="image">
                            <img src={film.im} alt={film.title} />
                        </div>
                        <div className="content">
                            <a className="header">{film.title}</a>
                            <div className="meta">
                                <span>{film.director}</span>
                            </div>
                            <div className="description">
                                <p>{film.description}</p>
                            </div>
                            <div className="extra">
                                <span>{film.duration} min</span>
                            </div>
                        </div>
                    </div>
                </div>
        </Modal.Content>
        <Modal.Actions>
            <Button positive
                labelPosition='right'
                icon='checkmark'
                content='Delete'
                onClick={removeFilm}/>
        </Modal.Actions>
    </Modal>
)

RemoveFilmModal.propTypes = {
    removeFilm: PropTypes.func.isRequired,
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        im: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired
}

export default RemoveFilmModal