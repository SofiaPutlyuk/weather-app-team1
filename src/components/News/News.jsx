import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const key = "c80a0b263e985ee12ec966548fe955c3";
  const [article, setArticle] = useState([]);
  const [item,setItem] =useState(4)
  console.log(article)
  useEffect(() => {
    fetch(`https://gnews.io/api/v4/search?q=Pets&apikey=${key}&max=${item}`)
      .then((response) => {
       if(!response.ok){
          return response.json().then(err => {
          throw new Error(`Error ${response.status}: ${err.message || JSON.stringify(err)}`);
        });
       }
       return response.json()
      })
      .then((data) => setArticle(data.articles));
  }, [item]);
  const moreItem=()=>{
    setItem(item + 4)
  }
  return (
    <section className="NewsSection">
      <div className="NewsSection_wrapper">
        <h3 className="NewsSection_wrapper_name">Interacting with our pets</h3>
        <div className="NewsSection_wrapper_news">
          {Array.isArray(article)&&article.map((articl, index) => (
            <NewsItem key={index} img={articl.image} title={articl.title} url={articl.url}/>
          ))}
        </div>
        <button className="NewsSection_wrapper_button" onClick={moreItem}>See more</button>
      </div>
    </section>
  );
};
export default News;
