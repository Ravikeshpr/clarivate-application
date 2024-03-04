import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { GlobalContextProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
);
