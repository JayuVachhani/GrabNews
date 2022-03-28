import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    const history = useHistory();
    const categories = ['business','entertainment','general','health','science','sports','technology']
    const handleCategory = (category) => {
        for (let i = 0; i <= categories.length;i++){
            if (categories[i] == category) {
                // console.log(i)
                history.push(`/${category}`)
            }
        }
        
    }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c09f562195121.5a883af1a9445.png"
            alt="First slide"
            height={600}
           
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://cbsnews1.cbsistatic.com/hub/i/2022/02/27/85225fb8-ebdf-4237-b5b6-d600213a5e46/localnewsarticle.jpg"
            alt="Second slide"
            height={600}
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.historic-newspapers.co.uk/app/uploads/2019/07/Old-Newspapers.jpg"
            alt="Third slide"
            height={600}
          />

          
        </Carousel.Item>
      </Carousel>
      <div className="categoryTitle">
        <h2>Try Different Categories</h2>
      </div>
      <div className="newsCategoryContainer">
        <div className="category business" onClick={()=>handleCategory('business')}>Business</div>
        <div className="category entertainment" onClick={()=>handleCategory('entertainment')}>Entertainment</div>
        <div className="category general" onClick={()=>handleCategory('general')}>General</div>
        <div className="category health" onClick={()=>handleCategory('health')}>Health</div>
        <div className="category science" onClick={()=>handleCategory('science')}>Science</div>
        <div className="category sports" onClick={()=>handleCategory('sports')}>Sports</div>
        <div className="category technology" onClick={()=>handleCategory('technology')}>Technology</div>
      </div>
    <Footer/>
      </>
  );
};

export default Home;
