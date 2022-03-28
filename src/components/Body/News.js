import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
// import articles from "./NewsJson.json";
import axios from "axios";
import Spinner from "./Spinner";
import "./News.css";
import Footer from "./Footer";
const News = (props) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  let totalResults = 20;

  useEffect(() => {
    availableNews();
  }, [page]);
  const availableNews = () => {
    window.scrollTo(0,0)
    setSpinner(true);
    setTimeout(async() => {
      let allNews = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=572d2029da354e9789cde76d6db500e6&page=${page}&pageSize=${props.pageSize}`
      );
      setNews(allNews.data.articles);
      setSpinner(false);
    }, 2000);
    
  };
  const prevPageHandler = async () => {
    setSpinner(true)
    if (page > 1) {
      setPage(page - 1);
      availableNews();
    }
    setSpinner(false)
  };
  const nextPageHandler = async () => {
    setSpinner(true)
    setPage(page + 1);
    availableNews();
    setSpinner(false)
  };
  
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <h2 className="text-center">Grab your latest News</h2>
        {spinner && <Spinner />}
        {news !== undefined
          ? news.map((element) => {
              return (
                <div className="col-md-4 mt-5">
                  <NewsItems key={element.url} newsDetails={element} />
                </div>
              );
            })
          : null}
        <div className="col-md-12 mt-5 mb-5 d-flex justify-content-between">
          <button
            disabled={page <= 1}
            className="btn btn-sm btn-dark"
            onClick={prevPageHandler}
          >
            &larr;Previous
          </button>
          <button
            disabled={page > Math.ceil(totalResults / props.pageSize)}
            className="btn btn-sm btn-dark"
            onClick={nextPageHandler}
          >
            Next&rarr;
          </button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default News;
