import Home from "../pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
