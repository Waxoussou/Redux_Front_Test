import React from 'react';

const Nav = ({ handleRouter }) => {

    return <div className='navbar'>
        <ul>
            <li onClick={handleRouter} >Accueil</li>
            <li onClick={handleRouter} >Contact</li>
        </ul>
    </div>
};

export default Nav;