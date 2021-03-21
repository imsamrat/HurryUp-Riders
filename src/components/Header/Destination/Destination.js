import { Button } from 'react-bootstrap';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FakeData from '../FakeData/data.json';
import './Destination.css';
import ManIcon from '../../../images/peopleicon.png'

const Destination = () => {
    const {details} = useParams();
    const newData = FakeData.find(element=> element.id == details);
    const {image, name, price } = newData;
    return (
        <div>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light d-flex search-details">
                            <img className="image-info" src={image} alt=""/>
                            <h5 className="name-info">{name}</h5>
                            <img className="image-info" src={ManIcon} alt=""/>
                            <p>1</p>
                            <p className="price-info">{price} Taka</p>
                        </div>
                        <div className="p-3 border bg-light d-flex search-details">
                            <img className="image-info" src={image} alt=""/>
                            <h5 className="name-info">{name}</h5>
                            <img className="image-info" src={ManIcon} alt=""/>
                            <p>1</p>
                            <p className="price-info">{price} Taka</p>
                        </div>
                        <div className="p-3 border bg-light d-flex search-details">
                            <img className="image-info" src={image} alt=""/>
                            <h5 className="name-info">{name}</h5>
                            <img className="image-info" src={ManIcon} alt=""/>
                            <p>1</p>
                            <p className="price-info">{price} Taka</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.064231782297!2d90.40590241429895!3d23.851852790811463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700a369ffaf%3A0xcf20fd10090ce0d7!2sAirport%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1616166779957!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;