import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="sub-header">
                <ul>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory here</Link>
                </ul>
            </div>
           
        </div>
    );
};

export default Header;