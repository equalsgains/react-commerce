import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links hello sign in return and orders your prime  */}
            {/* basket icon with number */}

        </nav>
    );
}

export default Header;