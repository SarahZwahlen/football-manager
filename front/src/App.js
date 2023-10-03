import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { FootballDataProvider } from "./context/football_app_context.js";
import { UserContextComponent } from "./context/userContext.js";
import "./assets/style.scss";
import Main from "./components/layout/Main";

function App() {


  return (
    <div className="app_container">
      <UserContextComponent>
        <FootballDataProvider>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </FootballDataProvider>
      </UserContextComponent>
    </div>
  );
}

export default App;
