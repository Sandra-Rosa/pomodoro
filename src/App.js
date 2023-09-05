import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="cover-image">
        <div src={logo} className="logo" />
        <div className="main">
          <div className="main-heading">WELCOME OUR GUEST</div>
          <div className="main-caption">Enjoy Delicious &<br/> Authentic Cuisine</div>
          <button>DISCOVER OUR MENU</button>
        </div>
      </div>
    </div>
  );
}

export default App;
