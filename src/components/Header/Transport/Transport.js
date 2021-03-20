import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Transport.css';

const Transport = (props) => {
    const { name, price, image, id} = props.transport;
    return (
        <div className="col-md-4 my-4">
        <Card className="bg-secondary">
            <Card.Img variant="top" className="transport-image" src={image} />
            <Card.Body>
                <div className="text-center">
                    {/* <Card.Title>{name}</Card.Title> */}
                    <Link to={`/destination/${id}`}><Button variant="danger">{name}</Button></Link>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Transport;