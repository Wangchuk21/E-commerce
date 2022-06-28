import React from "react";

import { connect } from "react-redux";
import { selectCartItemsCount } from "../../pages/redux/cart/cart.selector";

import { toggleCartHidden } from "../../pages/redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";

import './card-icon.styles.scss';

const CartIcon= ({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div> 
)

const matchDispatchToProps= dispatch=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
})

 
export default connect(mapStateToProps,matchDispatchToProps)(CartIcon);


