import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      <header>
        <div className="header-section">
          <img src="https://w7.pngwing.com/pngs/713/936/png-transparent-online-shopping-shopping-cart-logo-e-commerce-market-blue-angle-company.png"
            alt="logo" width="50px" height="50px" />
          <h1>E-commerce Website</h1>
        </div>
      </header>

      <NavBar />

      <section>
        <Home />
      </section>

      <footer>
        <p>&copy; 2024 Your E-commerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
