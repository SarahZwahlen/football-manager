import Header from "./components/Header";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import { FootballDataProvider } from "./context/football_app_context.js";
import Players from "./components/Players";
import "./components/style.scss";

function App() {
  return (
    <FootballDataProvider>
      <Header></Header>
      <Teams></Teams>
      <Players></Players>
      <Footer></Footer>
    </FootballDataProvider>
  );
}

export default App;
