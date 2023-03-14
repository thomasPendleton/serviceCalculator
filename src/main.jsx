import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MileContextProvider } from "./context/MileContext"
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MileContextProvider>
      <App />
    </MileContextProvider>
  </React.StrictMode>
)
