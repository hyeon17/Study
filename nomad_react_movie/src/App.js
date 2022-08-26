import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    // 여기서 라우터는 페이지, 스크린 등을 의미
    <Router>
      {/* 라우터를 찾음 */}
      <Switch>
        {/* abot-us페이지이면 */}
        <Route path="/abot-us">
          {/* 헬로우를 보여줌 */}
          <h1>Hello</h1>
        </Route>
        {/* 동적인 url */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        {/* 홈화면 */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
//로직은 home.js에 작성함
export default App;
