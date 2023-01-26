import {BrowserRouter} from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
        <MyNavBar />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
