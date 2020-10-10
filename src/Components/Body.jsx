import React from 'react';
import Contact from './Contact';
import Welcome from './Welcome';

const Body = ({ router }) => {

    return <div className='main-content'>
        {router.current_page === 'default' ?
            <Welcome /> :
            <Contact />
        }
    </div>
};

export default Body;