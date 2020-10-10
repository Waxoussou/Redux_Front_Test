import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LgSelector = () => {
    const lang = useSelector(state => state.langageReducer.current_langage);
    const dispatch = useDispatch();

    const handleLg = ({ target: { value: type } }) => dispatch({ type })

    return <Fragment>
        <label htmlFor="langage" >
            <select id='langage' onChange={handleLg}>
                <option value="FR" selected={lang === 'FR' ? true : false}>Français</option>
                <option value="EN" selected={lang === 'EN' ? true : false}>English</option>
            </select>
        </label>
    </Fragment >
}

export default LgSelector;