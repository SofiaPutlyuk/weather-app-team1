import React from "react";

const NewsItem=({img,title,url})=>{

    return(
        <div className="Item" onClick={() => window.open(url, "_blank")}>
            <img className="Item_img" src={img} alt={title} />
            <p className="Item_title">{title}</p>
        </div>
    )
}
export default NewsItem