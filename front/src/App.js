import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import { FootballDataProvider } from "./context/football_app_context.js";

function App() {
  return (
    <FootballDataProvider>
      
      <Header></Header>
      <Teams></Teams>
      <Footer></Footer>
    </FootballDataProvider>
  );
}

export default App;
