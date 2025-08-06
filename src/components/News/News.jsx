import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const key = "23c75b719bf7daa612c390e942d17d29";
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(`https://gnews.io/api/v4/search?q=Pets&apikey=${key}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, []);
  return (
    <section className="NewsSection">
      <div className="NewsSection_wrapper">
        <h3 className="NewsSection_wrapper_name">Interacting with our pets</h3>
        <div className="NewsSection_wrapper_news">
          {Array.isArray(article)&&article.map((articl, index) => (
            <NewsItem key={index} img={articl.image} title={articl.title} url={articl.url}/>
          ))}
        </div>
        <button className="NewsSection_wrapper_button">See more</button>
      </div>
    </section>
  );
};
export default News;
