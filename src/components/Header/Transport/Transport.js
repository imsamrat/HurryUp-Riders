import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Transport.css';

const Transport = (props) => {
    const { name, price, image } = props.transport;
    return (
        <div className="col-md-4 my-4">
        <Card className="bg-secondary">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="text-center">
                    {/* <Card.Title>{name}</Card.Title> */}
                    <Button variant="danger">{name}</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Transport;