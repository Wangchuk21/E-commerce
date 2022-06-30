import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.componet";
import { selectCartItems } from "../../pages/redux/cart/cart.selector";
import {toggleCartHidden} from "../../pages/redux/cart/cart.actions"
import './cart-dropdown.styles.scss'


const CartDropDown=({cartItems, dispatch})=>{

    let navigate=useNavigate();
   
    return(
        
    <div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length?(
            cartItems.map(cartItem=>
            <CartItem key={cartItem.id} item={cartItem} />))
            :
            (
            <span className="empty-message">your cart is empty</span>)
        }
    </div> 
    <CustomButton onClick={()=>{
        navigate('/checkout');
         dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT</CustomButton>
</div>
    )
}


const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)
