import React from "react";

export default function Header(props) {
  return (
    <div className="wrapper">
      <div>첫화면</div>
      <button>
        <a href="/login">시작하기</a>
      </button>
    </div>
  );
}
