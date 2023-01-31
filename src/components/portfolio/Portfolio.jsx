import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import Works from "../works/Works";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [workList, setWorkList] = useState(featuredPortfolio)
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    
    switch(selected){
      case "featured":
        setWorkList(featuredPortfolio)
        break;
      case "web":
        setWorkList(webPortfolio)
        break;
      case "mobile":
        setWorkList(mobilePortfolio)
        break;
      case "design":
        setWorkList(designPortfolio)
        break;
      case "content":
        setWorkList(contentPortfolio)
        break;
      default:
        setWorkList(featuredPortfolio)
        break;
    }
  }, [selected])
  

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList 
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      
      <div className="container">
        {workList.map(item => (
          <Works
            id={item.id}
            title={item.title}
            image={item.img}
          />
        ))}
      </div>
      
      


      {/* <div className="container">
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div>
        <div className="item">
          <img
            src="https://miro.medium.com/max/1400/1*j47uxBzs03_WVYdMzo0Qsw.png"
            alt=""
          />
          <h3>title</h3>
        </div> 
      </div> */}
    </div>
  );
}
