import { RouterProvider } from "react-router-dom";
import "./assets/css/style.css";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
