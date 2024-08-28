import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import "./index.scss";
// import { StoreProvider } from "./app/providers/StoreProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <StoreProvider> */}
    <App />
    {/* </StoreProvider> */}
  </BrowserRouter>
);
