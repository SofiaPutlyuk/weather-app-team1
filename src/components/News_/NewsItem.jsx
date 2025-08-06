import React from "react";

const NewsItem=({img,title})=>{

    return(
        <div className="Item">
            <img className="Item_img" src={img} alt={title} />
            <p className="Item_title">{title}</p>
        </div>
    )
}
export default NewsItem