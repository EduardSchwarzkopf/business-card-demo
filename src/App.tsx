import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <img src="" />
        </div>
        <div className="card-body">
          <div className="contact">
            <h1>Eduard Schwarzkopf</h1>
            <h3>Dude</h3>

            <p>example.com</p>
          </div>

          <div className="button-wrapper">
            <button className="Email">Email</button>
            <button className="LinkedIn">LinkedIn</button>
          </div>

          <h2>About</h2>
          <p>Something something</p>

          <h2>About</h2>
          <p>Something something</p>
        </div>
        <div className="card-footer">
          <div className="button-wrapper">
            <button className="footer-btn">Twitter</button>
            <button className="footer-btn">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
