import "./styles.css";
import Header from "./header/header";
import Weather from "./weather/weather"
import OtherInfo from "./other-info/other-info"
import Forecast from "./forecast/forecast"
import Search from "./search/search"
import Footer from "./footer/footer"

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Weather/>
        <OtherInfo/>
        <hr/>
        <Forecast/>
        <Search/>
        </main>
        <Footer/>
    </div>
  );
}
