import Header from "./components/Header";
import Footer from "./components/Footer";
import { FootballDataProvider } from "./context/football_app_context.js";
import "./components/style.scss";
import Main from "./components/Main";

function App() {
  return (
    <FootballDataProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </FootballDataProvider>
  );
}

export default App;
