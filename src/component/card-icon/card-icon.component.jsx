import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../pages/redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";

import './card-icon.styles.scss';

const CartIcon= ({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoping-icon"/>
        <span className="item-count">0</span>
    </div> 
)

const matchDispatchToProps= dispatch=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

 
export default connect(null,matchDispatchToProps)(CartIcon);


