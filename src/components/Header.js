import React from "react";
import "../styles/index.css";
// import "../styles/starting.css";
export default function Header(props) {
  return (
    <div className="starting-wrapper">
      <div className="starting-inner">
        <div className="starting-container">
          <div className="starting-title">
            <span>Hak.js 블로그</span>
          </div>
          <div className="starting-bt">
            <a href="/login">시작 !</a>
          </div>
        </div>
      </div>
    </div>
  );
}
