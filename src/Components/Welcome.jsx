import React from 'react';
import LgSelector from './LgSelector';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const lang = useSelector(state => state.langageReducer.current_langage);

    return <div className="accueil">
        <div className="header">
            <LgSelector />
        </div>
        <div className="content">
            {lang}
        </div>
    </div>
}
export default Welcome;