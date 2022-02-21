import logo from './logo.svg';
import './App.css';
import Img1 from './images/ironhack-logo-xs.png';
import Img2 from './images/menu-top-xs.png';
import Img3 from './images/icon1.png'
import Img4 from './images/icon2.png'
import Img5 from './images/icon3.png'
import Img6 from './images/icon4.png'

function App() {
  return (
    <div className="App">

      <div className="first-section">
        <div className="nav-bar">
          <img src={Img1}/>
          <img src={Img2} className="nav-el2"/>
        </div>
          <div className="say-hello-wrap">
            <h1 className="say-hello">Say hello to</h1>
            <h1 className="say-hello">ReactJS</h1>
          </div>
          <div className="youll-learn-sec">
            <h3 className="learn-line">You will learn how to use</h3>
            <h3 className="learn-line">the most popular frontend library,</h3>
            <h3 className="learn-line">and become a super Ninja developer.</h3>
          </div>
          <h3 className="button">Awesome!</h3>
      </div>
      <div className="icons">
        <div className="icon">
          <img src={Img3} />
          <h3 className="icon-title">Declarative</h3>
          <p className="icon-info">React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon">
          <img src={Img4} />
          <h3 className="icon-title">Components</h3>
          <p className="icon-info">Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon">
          <img src={Img5} />
          <h3 className="icon-title">Single-Way</h3>
          <p className="icon-info">A set of immutable values are passed to the components.</p>
        </div>
        <div className="icon">
          <img src={Img6} />
          <h3 className="icon-title">JSX</h3>
          <p className="icon-info">Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
