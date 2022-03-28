// import "./News.css";
import React from "react";
// 572d2029da354e9789cde76d6db500e6
const NewsItems = (props) => {
  const { title, description, url, urlToImage } = props.newsDetails;

  return (
    <div>
      <div className="card">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp"
          }
          className="card-img-top"
          alt="pic"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </h5>
          <p className="card-text">
            {description !== null
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="readMore"><a href={url} className="btn btn-sm btn-primary">
            Read More
          </a></div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
