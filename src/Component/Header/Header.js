import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user ,userSignOut} = useAuth()
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="sub-header">
                <ul>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory here</Link>
                    {
                        user.email && <span style={{color: 'white'}}>Hello { user.displayName}</span>
                    }
                    {!user?.email ?
                         <Link to="/login"> Login</Link> :
                         <button className="btn-normal" onClick={userSignOut}>Signout</button>
                   }
                </ul>
            </div>
           
        </div>
    );
};

export default Header;