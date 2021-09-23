import React from 'react';
import Loading from './Loading';

const Home = (props) => {
    document.title = "Petuk Restaurent";
    return (
        <div>
            <Loading />
        </div>
    );
};

export default Home;