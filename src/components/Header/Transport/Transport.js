import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Transport.css';

const Transport = (props) => {
    const { name, image, id} = props.transport;
    return (
        <div className="col-md-3 mt-5 d-flex justify-content-center transport-banner">
        <Card className="bg-secondary">
            <Card.Img variant="top" className="transport-image" src={image} />
            <Card.Body>
                <div className="text-center">
                    <Link to={`/search/${id}`}><Button variant="primary">{name}</Button></Link>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Transport;