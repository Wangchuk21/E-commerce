import React from "react";

import "../menuItem/menu-item.styles.scss";

const MenuItem = ({title, imageUrl,size}) => (

    <div className={`${size} menu-item`}>
        <div className="background-image"
        style={{
            backgroundImage:`url(${imageUrl})`
    }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitles">Shop Now</span>
            </div>  
        </div> 
);

export default MenuItem;