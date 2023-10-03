import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { FootballDataProvider } from "./context/football_app_context.js";
import "./assets/style.scss";
import Main from "./components/layout/Main";

function App() {
  return (
    <div className="app_container">
      <FootballDataProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </FootballDataProvider>
    </div>
  );
}

export default App;
