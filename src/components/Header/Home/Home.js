import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/data.json';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect( () => {
        setTransport(FakeData);
    },[])
    return (
        <div className= "row">
            {
                transport.map(transport => <Transport transport={transport}></Transport>)
            }
            
        </div>
    );
};

export default Home;