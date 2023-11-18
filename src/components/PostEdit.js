import React from "react";

export default function PostEdit() {
  return (
    <div className="create-wrppaer">
      <header>
        <div>
          <span>글 작성하기</span>
        </div>
      </header>
      <section className="create-section">
        <div className="create-inner">
          <form id="blog-form" action="#" method="post">
            <label for="title">제목:</label>
            <input type="text" id="title" name="title" required />

            <label for="author">작성날짜:</label>
            <input type="date" id="author" name="author" required />

            <label for="content">내용:</label>
            <textarea id="content" name="content" rows="4" required></textarea>
          </form>
          <div className="create-button">
            <div>
              <button>
                <a href="main.html">작성완료</a>
              </button>
            </div>
            <div>
              <button>
                <a href="main.html">되돌아가기</a>
              </button>
            </div>
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
