import React from "react";
import "../styling/Explore.css";
import tech from "../Images/tech.png";
import crypto from "../Images/Crypto.png";
import e from "../Images/commerce.png";
import market from "../Images/marketing.png";
import invest from "../Images/invest.png";
import enter from "../Images/enter.png";
import poetry from "../Images/poet.png";
import health from "../Images/health.png";

let name;

const Explore = () => {
  const clickHandler = (event) => {
    var session_data = localStorage.myValue;
    localStorage.myValue = event.target.id;
    name = event.target.id;
    console.log(localStorage.myValue);
    // console.log(event.target.id);
  };

  return (
    <div className="explore">
      <p className="explore-heading">
        {" "}
        WANNA EXPLORE MORE? <br />
        WHY NOT{" "}
        <div className="tunein-button" onClick={clickHandler}>
          <a value="tune-in" href="/explore" target="_blank">
            <span className="explore-tunein" id="all">
              TUNE IN
            </span>
          </a>
        </div>
      </p>
      <div className="explore-cat" onClick={clickHandler}>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img1" src={e} id="dance" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img2" src={crypto} id="crypto" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img3" src={tech} id="" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img4" src={market} id="marketing" />
        </a>
      </div>
      <div className="explore-cat" onClick={clickHandler}>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img5" src={invest} id="sing" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img6" src={enter} id="enter" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img7" src={poetry} id="poetry" />
        </a>
        <a className="explore-img" href="/explore" target="_blank">
          <img className="explore-img8" src={health} id="health" />
        </a>
      </div>
    </div>
  );
};

export default Explore;
export { name };
