import Header from "./components/Header";
import Home from "./components/home";
import './styles/App.scss'
import Work from "./components/Work"
import Timeline from "./components/Timeline";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contacts from "./components/contacts";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
