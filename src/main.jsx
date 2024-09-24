import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <NextUIProvider>
//       <App />
//     </NextUIProvider>
//   </React.StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
