import logo from "./assets/logo.png";
import "./App.css";
import img2 from './assets/image1.png';
function App() {
  return (
    <div className="App">
      <div class="cover-image">
        <div src={logo} className="logo" />
        <div className="main">
          <div className="main-heading">WELCOME OUR GUEST</div>
          <div className="main-caption">
            Enjoy Delicious &<br /> Authentic Cuisine
          </div>
          <button>DISCOVER OUR MENU</button>
        </div>
      </div>
      <div className="div2">
        <div className="div2-heading">
          <p className="div2-heading1">INTRODUCTION OF US</p>
          <p className="div2-heading2">Good things come to those who cook for others</p>
        </div>
        <div className="div2-main">
          <div className="div2-image">
            <img src={img2}/>
          </div>
          <div className="div2-para">
            <p>Nestled in Kochi, Pomodoro offers a culinary journey to Italy with every bite. Crafted by passionate chefs, our dishes use fresh, local ingredients, promising an authentic experience in a cozy setting. Dive into a world of pasta masterpieces and experience Italy, right here at Pomodoro. Buon appetito!</p>
            <button>MORE ABOUT US</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
