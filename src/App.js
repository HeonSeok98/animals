
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
    

  return (
    <BrowserRouter>
      <Switch>

        <Route path="/detail/:id">
          <Detail/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

// 라우터 주소 긴걸 위에서부터 적어야함 예를들어 /가 제일 위에 있으면 거기에 걸려서 다른 페이지 못감ㅋ
