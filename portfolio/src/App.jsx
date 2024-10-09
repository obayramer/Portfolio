import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Summary />
      <Skills />
      <Profile />
      <Project />
      <Footer />
    </>
  );
}

export default App;