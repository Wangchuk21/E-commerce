import React from "react";

import { connect } from "react-redux";
import { ClearItemFromCart,addItem,RemoveItem } from "../../pages/redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem=({cartItem, clearItem,addItem,RemoveItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>RemoveItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>

        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div> 
    )
}
const mapDispatchToProps= dispatch=>({
    clearItem: item=> dispatch(ClearItemFromCart(item)),
    addItem:item=> dispatch(addItem(item)),
    RemoveItem: item=>dispatch(RemoveItem(item))
}
)
export default connect(null,mapDispatchToProps)(CheckoutItem);