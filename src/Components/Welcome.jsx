import React from 'react';
import LgSelector from './LgSelector';

const Welcome = ({ title = "accueil" }) => {
    return <div className="accueil">
        <div className="header">
            <LgSelector />
        </div>
        <div className="content">
            {title}
        </div>
    </div>
}
export default Welcome;