import React from 'react'; 
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/Test">판독하기</Link>
            <Link to="/GoogleTrends">관심도</Link>
        </nav>
    );
}

export default Header;