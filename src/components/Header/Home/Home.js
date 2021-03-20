import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/data.json';
import Transport from '../Transport/Transport';
import Bg from '../../../images/Bg.png'
import { Image } from 'react-bootstrap';

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect( () => {
        setTransport(FakeData);
    },[])
    return (
        <div className="home-banner">
            <div>
                <Image src={Bg} fluid/>
                <div  className= "row banner-title">
                    {
                    transport.map(transport => <Transport transport={transport}></Transport>)
                    }
                </div>
                
            </div>
            {/* <div className= "row banner-title">
            {
                transport.map(transport => <Transport transport={transport}></Transport>)
            }
            </div> */}
        </div>
        
    );
};

export default Home;