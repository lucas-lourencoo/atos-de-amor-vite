import { BrowserRouter } from "react-router-dom";
import { PostsContextProvider } from "./contexts/PostsContext";
import { Router } from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
