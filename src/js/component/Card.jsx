import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
    return (
        <div className="card h-100">
            <img src={props.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div class="card-footer">
                    <button className="btn btn-primary">
                        Find out More!
                    </button>
                </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Card