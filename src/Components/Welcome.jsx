import React from 'react';
import LgSelector from './LgSelector';
import { useSelector } from 'react-redux';
import { showContentByCountry } from '../content/langUtils';

const Welcome = () => {
    const lang = useSelector(state => state.langageReducer.current_langage);

    return <div className="accueil">
        <div className="header">
            <LgSelector />
        </div>
        <div className="content">
            <h1>{showContentByCountry(lang, 'title')}</h1>
        </div>
    </div>
}
export default Welcome;