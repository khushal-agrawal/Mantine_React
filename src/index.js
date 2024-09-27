import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "mantine-react-table/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  // primaryColor: "primary",
  // Define your global styles here for table
  globalStyles: (theme) => ({
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#f8f9fa",
      borderRadius: "0.375rem",
      overflow: "hidden",
      th: {
        backgroundColor: "#e9ecef",
        fontWeight: "bold",
        padding: "0.75rem",
        textAlign: "left",
      },
      td: {
        padding: "0.75rem",
        borderBottom: "1px solid #dee2e6",
      },
      tfoot: {
        backgroundColor: "#e9ecef",
        padding: "0.75rem",
      },
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      withGlobalStyles={true}
      withNormalizeCSS={true}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
