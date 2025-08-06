import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const key = "bb13245f736a46919ce5d5ff12b77344";
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=Pets&from=2025-08-06&sortBy=popularity&apiKey=${key}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [article]);
  return (
    <section className="NewsSection">
      <div className="NewsSection_wrapper">
        <h3 className="NewsSection_wrapper_name">Interacting with our pets</h3>
        <div className="NewsSection_wrapper_news">
          {Array.isArray(article)&&article.map((articl, index) => (
            <NewsItem key={index} img={articl.urlToImage} title={articl.title}/>
          ))}
        </div>
        <button className="NewsSection_wrapper_button">See more</button>
      </div>
    </section>
  );
};
export default News;
