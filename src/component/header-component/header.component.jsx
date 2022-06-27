import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from '../../asset/crown.svg';
import './header.styles.scss'
import CartIcon from "../card-icon/card-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header=({currentUser,hidden})=>(

    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT 
            </Link>
            {
                currentUser?(
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
                :
                <Link className="option" to='/signin'>SIGNIN</Link>
            }
            <CartIcon/>
        </div>
       {hidden? null: <CartDropDown/>}
    </div>
)

const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);