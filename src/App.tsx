import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { PostsContextProvider } from "./contexts/PostsContext";
import { Router } from "./Routes";
import "./styles/global.scss";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
