
import React from 'react';
import LgSelector from './LgSelector';
import { useSelector } from 'react-redux';
import { showContentByCountry } from '../content/langUtils';
const Contact = () => {
    const lang = useSelector(state => state.langageReducer.current_langage);

    return <div className='contact-section'>
        <div className="header">
            <LgSelector />
        </div>
        <div className="content">
            <h1>{showContentByCountry(lang, 'contact')}</h1>
        </div>
    </div>
}

export default Contact;