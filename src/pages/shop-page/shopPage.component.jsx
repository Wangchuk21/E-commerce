import React from "react";
import SHOP_DATA from "./ShopPage.data.js";
import CollectionPreview from "../../component/Collection-Preview/CollectionPreview.component";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
            }
            console.log(this.state)
        }

        render(){
           // const {collections} = this.state;
            return (
                <div className="ShopPage">
                   {
                    this.state.collections.map(({id,...otherCollectionProps})=> (
                    <CollectionPreview key={id} {...otherCollectionProps}/> 
                    ))
                   } 
                </div>
            )
        }
    }


export default ShopPage;
