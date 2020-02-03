import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <NavLink exact={true} to='/' className='item' activeClassName='active'>Home</NavLink>
            <NavLink to='/about/test' className='item'>About</NavLink>
            <NavLink to='/posts' className='item'>Posts</NavLink>
            <NavLink to='/login' className='item'>Login</NavLink>
            <NavLink to='/me' className='item'>MyPage</NavLink>
            <NavLink to='/search' className='item'>Search</NavLink>
        </div>
    );
};

export default Header;
