import React from "react";

export default function Login() {
  return (
    <div className="login-warpper">
      <header></header>
      <section>
        <div className="login-conent-inner">
          <form action="/main-page" method="POST">
            <div className="form">
              <div className="form-id">
                <span>Id</span>
                <input type="text" id="userId" />
              </div>
              <div className="form-pwd">
                <span>Password</span>
                <input type="password" id="userPwd" />
              </div>

              <input type="submit" id="submit" placeholder="작성완료" />
            </div>
          </form>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
