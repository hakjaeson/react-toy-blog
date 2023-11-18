import React from "react";
import "../styles/main.css";

export default function Main(props) {
  return (
    <div className="main-wrapper">
      <header>
        <div className="header-inner">
          <div className="header-blog-logo">
            <img src="../images/blog-logo.png" />
          </div>

          <div className="blog-title">
            <span>Dummy 의 블로그</span>
          </div>
        </div>
      </header>

      <section className="blog-seciton">
        <table className="list-table">
          <tr className="list-table-header">
            <td></td>
            <td>글 순서</td>
            <td>제목</td>
            <td>작성자명</td>
            <td>작성날짜</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>dummy1</td>
            <td>dummy1</td>
            <td>dummy1</td>
            <td>dummy1</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>dummy2</td>
            <td>dummy2</td>
            <td>dummy2</td>
            <td>dummy2</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>dummy3</td>
            <td>dummy3</td>
            <td>dummy3</td>
            <td>dummy3</td>
          </tr>
        </table>

        <div className="list-edit">
          <div className="blog-edit">
            <button>
              <a href="/post-create">글쓰기</a>
            </button>
          </div>
          <div className="blog-delete">
            <button>
              <a href="/delete">삭제하기</a>
            </button>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div>
          <span>만든 인간 : 손재학</span>
        </div>
        <div>
          <span>프로젝트 명 : 블로그 리엑트 프로젝트</span>
        </div>
      </footer>
    </div>
  );
}
