import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/data.json';
import Transport from '../Transport/Transport';
import Bg from '../../../images/Bg.png';
import './Home.css';

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect( () => {
        setTransport(FakeData);
    },[])
    return (
        <div className="home-banner" style={{backgroundImage:`url(${Bg})`}}>
            <div>
                <div className= "row">
                    {
                    transport.map(transport => <Transport transport={transport}></Transport>)
                    }
                </div>
                
            </div>
        </div>
        
    );
};

export default Home;