import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LgSelector = () => {
    const lang = useSelector(state => state.langageReducer.current_langage);

    const dispatch = useDispatch();
    const handleLg = ({ target: { value: type } }) => dispatch({ type })

    return <Fragment>
        <label htmlFor="langage" >
            <select id='langage' onChange={handleLg} value={lang}>
                <option value="FR" >Français</option>
                <option value="EN" >English</option>
            </select>
        </label>
    </Fragment >
}

export default LgSelector;