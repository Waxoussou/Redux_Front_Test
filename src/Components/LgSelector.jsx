import React, { Fragment } from 'react';

const LgSelector = () => {
    return <Fragment>
        <label htmlFor="langage" >
            <select id='langage'>
                <option value="Français">Français</option>
                <option value="English">English</option>
            </select>
        </label>
    </Fragment >
}

export default LgSelector;